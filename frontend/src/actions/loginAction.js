export async function loginAction({ request }) {
	try {
		const formData = await request.formData();
		const email = formData.get("email");
		const password = formData.get("password");

		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/api/user/login`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			}
		);

		if (!response.ok) {
			const errorResponse = await response.json();
			throw new Error(errorResponse.message || "Login SSfailed");
		}

		const result = await response.json();
		return { success: true, message: "Signup successful!", user: result };
	} catch (error) {
		console.error("Login action error:", error);
		return {
			success: false,
			message: "An error occurred during login. Please try again later.",
		};
	}
}
