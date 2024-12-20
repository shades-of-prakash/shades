import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import { useTheme } from "../hooks/UseTheme";
import ScrollToTop from "../utils/ScrollToTop";
const Layout = () => {
    const { isDark } = useTheme();
    return (
        <div className={`layout ${isDark ? "dark" : "light"} `}>
            <Navbar />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    );
};
export default Layout;
