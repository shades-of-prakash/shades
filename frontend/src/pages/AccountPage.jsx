import React from "react";
import "../styles/accountpage.css";
import { Link, Outlet } from "react-router-dom";
import { Box, User, Heart, Location, Bag2 } from "iconsax-react";
import { useTheme } from "../hooks/UseTheme";
const AccountPage = () => {
    const { isDark } = useTheme();
    return (
        <div className="main_account_div">
            <div className="sub_account_div">
                <div className="side_menu">
                    <h1>Account</h1>
                    <ul>
                        <li>
                            <Link to="/account/account_details">
                                <User
                                    size="24"
                                    color={isDark ? "white" : "black"}
                                />
                                <span>Account Details</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/account/delivery_address">
                                <Location
                                    size="24"
                                    color={isDark ? "white" : "black"}
                                />
                                <span>Delivery Addresses</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/account/orders">
                                <Box
                                    size="24"
                                    color={isDark ? "white" : "black"}
                                />
                                <span>Orders</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/account/cart">
                                <Bag2
                                    size="24"
                                    color={isDark ? "white" : "black"}
                                />
                                <span>Cart Items</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/account/wishlist">
                                <Heart
                                    size="24"
                                    color={isDark ? "white" : "black"}
                                />
                                <span>WishList</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
