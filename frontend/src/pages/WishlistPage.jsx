import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
const WishlistPage = () => {
	const [wishlist, setWishlist] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchWishlist = async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/api/user/getwishlistitems`,
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
			setWishlist(data);
		} catch (err) {
			setError(err.message || "Error fetching wishlist");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchWishlist();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<h1>Wishlist</h1>
			{wishlist.length > 0 ? (
				<div>
					{wishlist.map((item, index) => (
						<Card product={item} key={index} />
						// <li key={item._id}>
						//     <h2>{item.productBrand}</h2>
						//     <p>{item.productDescription}</p>
						//     <img
						//         src={item.mainImageUrl}
						//         alt={item.productBrand}
						//     />
						//     <p>Price: ${item.productPrice}</p>
						// </li>
					))}
				</div>
			) : (
				<p>Your wishlist is empty.</p>
			)}
		</div>
	);
};

export default WishlistPage;
