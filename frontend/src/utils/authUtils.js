import { jwtDecode } from "jwt-decode";

export const getUserDataFromToken = (token) => {
    if (!token) return null; // If no token is provided

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken; // This will return the decoded token data
    } catch (error) {
        console.error("Invalid token", error);
        return null; // In case of an error, return null
    }
};
