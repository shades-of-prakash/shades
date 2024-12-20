import React from "react";
import { useLoaderData } from "react-router-dom";
const SideMenu = ({ data }) => {
    const productBrands = [
        ...new Set(data.products.map((item) => item.productBrand)),
    ];
    return (
        <div className="sidemenu">
            <div className="brands">
                <h3>Brands</h3>
                {productBrands.map((brand) => (
                    <div key={brand} className="brand">
                        <input type="checkbox" />
                        <span>{brand}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideMenu;
