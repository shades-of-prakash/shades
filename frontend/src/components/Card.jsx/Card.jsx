import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ product, products }) => {
    // console.log(styles);
    const {
        _id,
        category,
        mainImageUrl,
        productOriginalPrice,
        productPrice,
        productDescription,
        productBrand,
        productDiscountPercentage,
    } = product;
    return (
        <Link
            to={`/product/${_id}`}
            state={{ product, products }}
            className="card">
            <div className="card_image_container">
                <img src={mainImageUrl} alt="" />
            </div>
            <div className="product_details">
                <h3>{productBrand}</h3>
                <p>{capitalizeFirstLetter(productDescription)}</p>
                <div className="card_price">
                    <span className="product_price">{productPrice}</span>
                    <span className="product_strike">
                        {productOriginalPrice}
                    </span>
                    <span className="product_discount">
                        {productDiscountPercentage}
                    </span>
                </div>
            </div>
        </Link>
    );
};

function capitalizeFirstLetter(str) {
    return str
        .split(" ") // Split the string by spaces
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ) // Capitalize first letter, lowercase the rest
        .join(" "); // Join the words back with spaces
}

export default Card;
