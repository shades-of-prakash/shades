import React, { useEffect, useState } from "react";
const AccountDetails = () => {
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_URL}/api/user/me`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${localStorage.getItem("token")}`,
						},
					}
				);

				if (response.ok) {
					const data = await response.json();
					setUserData(data);
				} else {
					const message = await response.json();
					setError(message.message || "Failed to fetch user data.");
				}
			} catch (err) {
				setError("An error occurred while fetching user data.");
			} finally {
				setLoading(false);
			}
		};

		fetchUserInfo();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className="account-details">
			<h1>Account Details</h1>
			{userData && (
				<div className="deatils">
					<div>
						<strong>Name:</strong> {userData.first_name}{" "}
						<span>{userData.last_name}</span>
					</div>
					<div>
						<strong>Email:</strong> {userData.email}
					</div>
					<div>
						<strong>Phone Number:</strong> {userData.phone_number}
					</div>
					<div>
						<strong>Date of Birth:</strong>{" "}
						{new Date(userData.date_of_birth).toLocaleDateString()}
					</div>
				</div>
			)}
		</div>
	);
};

export default AccountDetails;
