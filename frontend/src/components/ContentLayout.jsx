import React, { useEffect, useState } from "react";
import Card from "./Card.jsx/Card";
const ContentLayout = ({ data }) => {
    const { products } = data;
    return (
        <div className="data_display">
            {products.map((item, index) => (
                <Card
                    products={products}
                    product={item}
                    key={item._id}
                    styles={{ width: "286px" }}
                />
            ))}
        </div>
    );
};

export default ContentLayout;
