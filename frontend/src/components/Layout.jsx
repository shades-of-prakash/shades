import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useTheme } from "../hooks/UseTheme";
const Layout = () => {
    const { isDark } = useTheme();
    return (
        <div className={`dfc dffd ${isDark ? "dark" : "light"} `}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
