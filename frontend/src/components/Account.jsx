import React from "react";
import { useAuth } from "../hooks/UseAuth";
import { getUserDataFromToken } from "../utils/authUtils";
import { Link } from "react-router-dom";
const Account = () => {
    const { logout } = useAuth();
    const userData = getUserDataFromToken(localStorage.getItem("token"));
    return (
        <div className="account_settings">
            <div className="user_div">
                <h1 className="username">{userData.user_name}</h1>
                <p className="email">{userData.email}</p>
            </div>
            <ul>
                <li className="a">
                    <Link to="/account">Account</Link>
                </li>
                <li className="a">
                    <Link to="/account/orders">Order</Link>
                </li>
            </ul>
            <button onClick={() => logout()}>logout</button>
        </div>
    );
};

export default Account;
