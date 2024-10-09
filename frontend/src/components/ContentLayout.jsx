import React from "react";
import { useParams } from "react-router-dom";

const ContentLayout = () => {
    const { category } = useParams();
    return <div className="data_display">{category}</div>;
};

export default ContentLayout;
