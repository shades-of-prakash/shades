import React, { useEffect } from "react";
import {
    Outlet,
    useLoaderData,
    useNavigate,
    useParams,
} from "react-router-dom";
import "../styles/productLayout.css";
import ContentLayout from "./ContentLayout";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import SideMenu from "./SideMenu";
import ScrollToTop from "../utils/ScrollToTop";

const ProductLayout = () => {
    const data = useLoaderData();
    const { totalPages } = data;
    const navigate = useNavigate();

    const handlePageClick = (pageNumber) => {
        const newUrl = `?page=${pageNumber}`;
        navigate(newUrl);
    };
    return (
        <div className="main_display_grid dffd">
            <ScrollToTop />
            <BreadCrumbs />
            <div className="two_divs_container">
                <SideMenu data={data} />
                <ContentLayout data={data} />
            </div>
            <div className="pagination">
                <div className="pagination_sub_div">
                    {[...Array(totalPages)].map((_, index) => (
                        <div
                            key={index + 1}
                            className="page dfc"
                            onClick={() => handlePageClick(index + 1)}>
                            <span>{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductLayout;
