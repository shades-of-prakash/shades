import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/singleProduct.css";
import { useTheme } from "../hooks/UseTheme.jsx";
import { Box1, Truck, ArrowForward } from "iconsax-react";
import Card from "../components/Card.jsx/Card.jsx";
import { useAuth } from "../hooks/UseAuth.jsx";
function SingleProduct() {
	const location = useLocation();
	const navigate = useNavigate();
	const { isDark } = useTheme();
	const { isAuthenticated } = useAuth();
	const product = location.state?.product;
	const products = location.state?.products || [];
	const [relatedProducts, setRelatedProducts] = useState(products);
	const [mainImageUrl, setMainImageUrl] = useState(product?.mainImageUrl);

	const [additionalImageUrls, setAdditionalImageUrls] = useState(
		product?.additionalImageUrls || []
	);
	const [isWishlisted, setIsWishListed] = useState(false);
	const [selectedSize, setSelectedSize] = useState("");
	const [attemptedAddToCart, setAttemptedAddToCart] = useState(false);
	const [isAddedToCart, setIsAddedToCart] = useState(false); // New state for cart status

	useEffect(() => {
		const currentProduct = location.state?.product;
		if (currentProduct) {
			setMainImageUrl(currentProduct.mainImageUrl);
			setAdditionalImageUrls(currentProduct.additionalImageUrls || []);
			if (!location.state?.products) {
				fetchRelatedProducts(currentProduct.category, currentProduct._id);
			}
		}
	}, [location.pathname, location.state]);

	useEffect(() => {
		if (!products.length && product) {
			fetchRelatedProducts(product.category, product._id);
		}
	}, [product, products]);

	const fetchRelatedProducts = async (category, currentProductId) => {
		function extractGender(categoryString) {
			const match = categoryString.match(/^(Men|Women)/);
			return match ? match[0] : null;
		}
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/api/products/${extractGender(
					category
				)}/${category}`
			);
			if (!response.ok) {
				throw new Error(
					`Error fetching related products: ${response.statusText}`
				);
			}
			const products = await response.json();
			const filteredProducts = products.products.filter(
				(prod) => prod._id !== currentProductId
			);
			setRelatedProducts(filteredProducts);
		} catch (error) {
			console.error("Error fetching related products:", error.message);
		}
	};

	const swapImage = (clickedImageUrl, index) => {
		const newMainImage = clickedImageUrl;
		const updatedAdditionalImages = [...additionalImageUrls];
		updatedAdditionalImages[index] = mainImageUrl;
		setMainImageUrl(newMainImage);
		setAdditionalImageUrls(updatedAdditionalImages);
	};

	async function handleWishList(id) {
		setIsWishListed((prev) => !prev);
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/api/user/wishlist`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					body: JSON.stringify({ product_id: id }),
				}
			);

			if (!response.ok) {
				throw new Error(`Error: ${response.statusText}`);
			}

			const result = await response.json();
			console.log(result);
		} catch (error) {
			console.error("Error in handleWishList:", error.message);
		}
	}

	async function handleCart(id, size) {
		setAttemptedAddToCart(true);
		if (!selectedSize) {
			return;
		}
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/api/user/cart`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
					body: JSON.stringify({
						product_id: id,
						size: selectedSize,
					}),
				}
			);

			if (!response.ok) {
				throw new Error(`Error: ${response.statusText}`);
			}

			const result = await response.json();
			console.log(result);
			setIsAddedToCart(true);
		} catch (error) {
			console.error("Error in handleCart:", error.message);
		}
	}

	if (!product) {
		return <div>Loading product details...</div>;
	}

	return (
		<div className="main_single_product dffd">
			<div className="sub_single_product">
				<div className="images_grid">
					<div className="main_img">
						<img src={mainImageUrl} alt={product.productDescription} />
					</div>
					<div className="sub_images_grid">
						{additionalImageUrls.map((url, index) => (
							<img
								key={index}
								src={url}
								alt={`Sub Image ${index}`}
								onClick={() => swapImage(url, index)}
								style={{ cursor: "pointer" }}
							/>
						))}
					</div>
				</div>

				<div className="single_product_details">
					<h1>{product.productBrand}</h1>
					<p className="pdes">{product.productDescription}</p>
					<div className="price_div">
						<span className="pp">{product.productPrice}</span>
						<span className="pop">{product.productOriginalPrice}</span>
						<span>{product.productDiscountPercentage}</span>
					</div>
					<span className="inc">inclusive of all taxes</span>

					<div className="sizechart">
						<p>Select size</p>
						<div className={`sizes ${isDark ? "dark" : "light"}`}>
							{["S", "M", "L", "XL", "XXL"].map((size) => (
								<div
									key={size}
									className={`size dfc ${
										selectedSize === size ? "size_selected" : ""
									} ${isDark ? "dark" : "light"}`}
									onClick={() => {
										setSelectedSize(size);
										setAttemptedAddToCart(false); // Reset the warning when size is selected
									}}
								>
									<span>{size}</span>
								</div>
							))}
						</div>
					</div>

					{attemptedAddToCart && !selectedSize && (
						<div
							className="size-warning"
							style={{ color: "red", marginBottom: "10px" }}
						>
							Please select a size before adding to the cart.
						</div>
					)}

					<div className="buynow">
						{isAddedToCart ? (
							<button
								className="addtobag"
								onClick={() => {
									navigate("/account/cart");
								}}
							>
								Go to Bag
							</button>
						) : (
							<button
								className="addtobag"
								onClick={() => {
									if (isAuthenticated) {
										handleCart(product._id, selectedSize);
									} else {
										navigate("/login");
									}
								}}
							>
								Add to Bag
							</button>
						)}
						<button
							className="wishlist dfc"
							onClick={() => handleWishList(product._id)}
						>
							<div className="dfsb" style={{ gap: "8px" }}>
								<ion-icon name="heart"></ion-icon>
								<span>{isWishlisted ? "Added" : "Add to Wishlist"}</span>
							</div>
						</button>
					</div>

					<div className="delivery_options">
						<div className="df" style={{ gap: "10px" }}>
							<h3>Delivery Options</h3>
							<Truck size="18" />
						</div>
						<div>
							<div className="df option">
								<Box1
									size="20"
									color={isDark ? "white" : "black"}
									variant="Outline"
								/>
								<p>Pay on delivery available</p>
							</div>
							<div className="df option">
								<ArrowForward
									size="20"
									color={isDark ? "white" : "black"}
									variant="Outline"
								/>
								<p>Easy 14 days return & exchange available</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h1>You may also like</h1>
			<Similar data={relatedProducts} id={product._id} />
		</div>
	);
}

function Similar({ data }) {
	return (
		<div className="similar_products">
			{data.map((product) => (
				<Card key={product._id} product={product} products={data} />
			))}
		</div>
	);
}

export default SingleProduct;
