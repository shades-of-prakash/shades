// components/RedirectIfAuthenticated.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth.jsx";

const RedirectIfAuthenticated = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/home" replace />;
    }

    return children; // Render login if not authenticated
};

export default RedirectIfAuthenticated;
