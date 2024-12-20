import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/UseTheme";
const Dropdown = ({ genderData, isActive, onClose }) => {
    const { isDark } = useTheme();
    return (
        <div className={`dropdown ${isActive ? "active" : ""}`}>
            {genderData.content.map((category, categoryIndex) => (
                <div
                    key={category.mainCategory}
                    className="product"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                    <div className="product_side">
                        <h3>{category.mainCategory}</h3>
                        {category.subCategory.length != 0 && (
                            <ul className="product_categories">
                                {category.subCategory.map(
                                    (subCategory, index) => (
                                        <li
                                            key={index}
                                            className="product_category">
                                            <Link
                                                to={`/${genderData.gender}/${subCategory}`}
                                                onClick={onClose}>
                                                {subCategory}
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        )}
                    </div>
                    {categoryIndex !== genderData.content.length - 1 && (
                        <div
                            className={
                                isDark
                                    ? "dropdown_dark_dashed_border"
                                    : "dropdown_light_dashed_border"
                            }></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Dropdown;
