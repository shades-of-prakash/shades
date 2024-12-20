export const signupAction = async ({ request }) => {
	const formData = await request.formData();
	const day = formData.get("day");
	const month = formData.get("month");
	const year = formData.get("year");
	const dateOfBirth = `${String(day).padStart(2, "0")}-${String(month).padStart(
		2,
		"0"
	)}-${year}`;

	const data = {
		user_name: formData.get("username"),
		first_name: formData.get("first_name"),
		last_name: formData.get("last_name"),
		email: formData.get("email"),
		password: formData.get("password"),
		date_of_birth: dateOfBirth,
		phone_number: formData.get("phone_number"),
	};
	console.log(data);
	try {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/api/user/register`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		);

		if (!response.ok) {
			const errorResponse = await response.json();
			throw new Error(errorResponse.message || "Signup failed");
		}

		const result = await response.json();
		if (result.token) {
			localStorage.setItem("token", result.token);
		}
		return { success: true, message: "Signup successful!", user: result };
	} catch (error) {
		return { success: false, message: error.message };
	}
};
