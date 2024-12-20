import React, { useEffect, useState } from "react";
import "../styles/cartPage.css";
import { Link } from "react-router-dom";
const CartPage = () => {
	const [cartProducts, setCartProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchCartProducts = async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/api/user/getcartitems`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			console.log(data);
			setCartProducts(data);
		} catch (err) {
			setError(err.message || "Error fetching cart products");
		} finally {
			setLoading(false);
		}
	};

	const updateQuantity = async (id, change) => {
		try {
			const currentItem = cartProducts.find((item) => item._id === id);
			const newQuantity = Math.max(0, currentItem.quantity + change);

			if (newQuantity > 10) {
				return;
			}
			const response = await fetch(
				"http://localhost:3000/api/user/updatecart",
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					body: JSON.stringify({
						product_id: id,
						quantity: newQuantity,
					}),
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			setCartProducts((prevProducts) =>
				newQuantity === 0
					? prevProducts.filter((item) => item._id !== id)
					: prevProducts.map((item) =>
							item._id === id ? { ...item, quantity: newQuantity } : item
					  )
			);
		} catch (err) {
			setError(err.message || "Error updating cart quantity");
		}
	};

	const createOrder = async () => {
		try {
			const response = await fetch(
				"http://localhost:3000/api/user/createorder",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			console.log(data);
			setCartProducts([]); // Clear cart products on successful order
		} catch (err) {
			console.log(err);
		}
	};
	const calculateCartTotal = () => {
		return cartProducts.reduce((total, item) => {
			const cleanedPriceString = item.productPrice.replace("₹", "");
			const itemTotal = Number(cleanedPriceString) * item.quantity;
			return total + itemTotal;
		}, 0);
	};
	useEffect(() => {
		fetchCartProducts();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<h1 style={{ margin: "10px" }}>Shopping Cart</h1>
			<p style={{ margin: "10px" }}>{cartProducts.length} items in your bag</p>
			{cartProducts.length > 0 ? (
				<div className="cart_div">
					<ul className="cart_ul">
						<div className="cart_titles">
							<div>Product</div>
							<div>Price</div>
							<div>Size</div>
							<div>Quantity</div>
							<div>Total</div>
						</div>
						{cartProducts.map((item) => (
							<li key={item._id} className="cart_item">
								<div className="cart_product">
									<Link to={`/product/${item._id}`} state={{ product: item }}>
										<img src={item.mainImageUrl} alt={item.productBrand} />
									</Link>
									<div className="description">
										<h2>{item.productBrand}</h2>
										<p>{capitalizeFirstLetter(item.productDescription)}</p>
									</div>
								</div>
								<div className="product_price">
									<p className="amount">{item.productPrice}</p>
								</div>
								<div className="product_size">
									<p>{item.size}</p>
								</div>
								<div className="quantity">
									<button
										className="button"
										onClick={() => updateQuantity(item._id, -1)}
									>
										-
									</button>
									<p className="quantity_display">{item.quantity}</p>
									<button
										className="button"
										onClick={() => updateQuantity(item._id, 1)}
									>
										+
									</button>
								</div>
								<div className="quantity_price">
									{`₹${multiplyPrice(item.productPrice, item.quantity)}`}
								</div>
							</li>
						))}
					</ul>
					<div className="price">
						<h1>Cart total</h1>
						<div>
							<div className="dfsb">
								<p>Cart Subtotal</p>
								<span>{`₹${calculateCartTotal()}`}</span>
							</div>
							<div className="dfsb">
								<p>Delivery fee</p>
								<span>FREE</span>
							</div>
							<div className="dfsb">
								<p>Discount</p>
								<span>0</span>
							</div>
						</div>
						<button onClick={createOrder}>Order</button>
					</div>
				</div>
			) : (
				<p>Your cart is empty.</p>
			)}
		</div>
	);
};
function multiplyPrice(priceString, quantity) {
	const cleanedPriceString = priceString.replace("₹", "");
	return Number(cleanedPriceString) * Number(quantity);
}

function capitalizeFirstLetter(str) {
	return str
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");
}

export default CartPage;
