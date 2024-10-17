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
import { ArrowRight2, ArrowLeft2 } from "iconsax-react";
import { useTheme } from "../hooks/UseTheme";
const ProductLayout = () => {
    const data = useLoaderData();
    const { isDark } = useTheme();
    const { totalPages } = data;
    const navigate = useNavigate();
    const handlePageClick = (pageNumber) => {
        const newUrl = `?page=${pageNumber}`;
        navigate(newUrl);
    };
    const handleScrollLeft = () => {
        document.querySelector(".pagination_boxes").scrollLeft -= 100;
    };

    const handleScrollRight = () => {
        document.querySelector(".pagination_boxes").scrollLeft += 100;
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
                    <div className="arrow" onClick={handleScrollLeft}>
                        <ArrowLeft2
                            size="24"
                            color={isDark ? "white" : "black"}
                        />
                    </div>
                    <div className="pagination_boxes">
                        {[...Array(totalPages)].map((_, index) => (
                            <div
                                key={index + 1}
                                className="page dfc"
                                onClick={() => handlePageClick(index + 1)}>
                                <span>{index + 1}</span>
                            </div>
                        ))}
                    </div>
                    <div className="arrow" onClick={handleScrollRight}>
                        <ArrowRight2
                            size="24"
                            color={isDark ? "white" : "black"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLayout;
