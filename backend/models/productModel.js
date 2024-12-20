import mongoose from "mongoose";

// Define a schema for the product
const productSchema = new mongoose.Schema({
    additionalImageUrls: {
        type: [String],
        required: true,
    },
    mainImageUrl: {
        type: String,
        required: true,
    },
    productBrand: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productDiscountPercentage: {
        type: String,
        required: true,
    },
    productOriginalPrice: {
        type: String,
        required: true,
    },
    productPrice: {
        type: String,
        required: true,
    },
    productUrl: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

// Create models based on the schema
const Men = mongoose.model("Men", productSchema, "Men");
const Women = mongoose.model("Women", productSchema, "Women");
export { Men, Women };
