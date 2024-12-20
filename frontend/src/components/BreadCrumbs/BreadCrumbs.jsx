import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BreadCrumbs.css";
const BreadCrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    const formatBreadcrumb = (str) => {
        const formatted = str.replace(/\s+/g, ""); // Remove spaces
        return (
            formatted.charAt(0).toUpperCase() + formatted.slice(1).toLowerCase()
        );
    };

    return (
        <nav className="breadCrumbs">
            <ul className="breadcrumb">
                <li className="dfsb bread_item">
                    <Link to="/">Home</Link>
                    {pathnames.length > 0 && (
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    )}
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    return (
                        <li key={to} className="dfsb bread_item">
                            {index + 1 === pathnames.length ? (
                                <span>{formatBreadcrumb(value)}</span>
                            ) : (
                                <>
                                    <Link to={to}>
                                        {formatBreadcrumb(value)}
                                    </Link>
                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default BreadCrumbs;
