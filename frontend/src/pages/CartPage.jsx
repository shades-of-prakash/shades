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
                "http://localhost:3000/api/user/getcartitems",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
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
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
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

            // Update the local state
            setCartProducts((prevProducts) =>
                newQuantity === 0
                    ? prevProducts.filter((item) => item._id !== id)
                    : prevProducts.map((item) =>
                          item._id === id
                              ? { ...item, quantity: newQuantity }
                              : item
                      )
            );
        } catch (err) {
            setError(err.message || "Error updating cart quantity");
        }
    };

    useEffect(() => {
        fetchCartProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Shopping Cart</h1>
            <p>{cartProducts.length} items in your bag</p>
            {cartProducts.length > 0 ? (
                <div className="cart_div">
                    <ul className="cart_ul">
                        {cartProducts.map((item) => (
                            <li key={item._id} className="cart_item">
                                <Link
                                    to={`/product/${item._id}`}
                                    state={{ product: item }}>
                                    <img
                                        src={item.mainImageUrl}
                                        alt={item.productBrand}
                                    />
                                </Link>
                                <div className="cart_item_details">
                                    <h2>{item.productBrand}</h2>
                                    <p>
                                        {capitalizeFirstLetter(
                                            item.productDescription
                                        )}
                                    </p>
                                    <p className="amount">
                                        {item.productPrice}
                                    </p>
                                    <p>{item.size}</p>
                                    <div className="quantity">
                                        <button
                                            className="button"
                                            onClick={() =>
                                                updateQuantity(item._id, -1)
                                            }>
                                            -
                                        </button>
                                        <p className="quantity_display">
                                            {item.quantity}
                                        </p>
                                        <button
                                            className="button"
                                            onClick={() =>
                                                updateQuantity(item._id, 1)
                                            }>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="price"></div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

function capitalizeFirstLetter(str) {
    return str
        .split(" ") // Split the string by spaces
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" "); // Join the words back with spaces
}

export default CartPage;
