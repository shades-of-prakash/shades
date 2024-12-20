import mongoose from "mongoose";
import { config } from "dotenv";
import { Men, Women } from "../models/productModel.js";

async function getProducts(req, res) {
    const { gender, category } = req.params;
    if (gender !== "Men" && gender !== "Women") {
        return res.status(400).json({
            error: "Invalid gender parameter. Please use 'Men' or 'Women'.",
        });
    }
    const { page = 1, limit = 12 } = req.query;

    const skip = (page - 1) * limit;

    try {
        const Model = gender === "Men" ? Men : Women;

        const query = category ? { category } : {};
        console.log(query);
        const products = await Model.find(query).skip(skip).limit(limit);

        const totalProducts = await Model.countDocuments(query);
        const totalPages = Math.ceil(totalProducts / limit);

        console.log(
            `Fetched ${products.length} ${gender} products on page ${page}`
        );
        res.json({
            products,
            totalProducts,
            totalPages,
            currentPage: page,
        });
    } catch (error) {
        console.error("Error during query:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getRandomProducts(req, res) {
    const { gender, category } = req.params;
    if (gender !== "Men" && gender !== "Women") {
        return res.status(400).json({
            error: "Invalid gender parameter. Please use 'Men' or 'Women'.",
        });
    }

    // Convert page and limit to numbers
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;

    const skip = (page - 1) * limit;

    try {
        const Model = gender === "Men" ? Men : Women;

        const query = category ? { category } : {};
        console.log(query);

        // Ensure limit is a number before passing it to $sample
        const products = await Model.aggregate([
            { $match: query }, // Match products based on the category
            { $sample: { size: limit } }, // Randomly sample 'limit' number of products
        ]);

        const totalProducts = await Model.countDocuments(query);
        const totalPages = Math.ceil(totalProducts / limit);

        console.log(
            `Fetched ${products.length} randomized ${gender} products on page ${page}`
        );
        res.json({
            products,
            totalProducts,
            totalPages,
            currentPage: page,
        });
    } catch (error) {
        console.error("Error during query:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
export default getRandomProducts;

export { getProducts, getRandomProducts };
