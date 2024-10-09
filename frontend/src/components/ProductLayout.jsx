import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/productLayout.css";
const ProductLayout = () => {
    return (
        <div
            style={{ height: "100dvh", width: "100%" }}
            className="main_display_grid dffd">
            <div className="breadCrumbs">sai</div>
            <div className="dfsb" style={{ height: "inherit" }}>
                <div className="sidemenu"></div>
                <Outlet />
            </div>
        </div>
    );
};

export default ProductLayout;
