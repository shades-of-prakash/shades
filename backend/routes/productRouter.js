import express from "express";
import {
    getProducts,
    getRandomProducts,
} from "../controllers/menProductController.js";

const productRouter = express.Router();
productRouter.get("/:gender", getProducts);
productRouter.get("/:gender/:category", getProducts);
productRouter.get("/random/:gender/:category", getRandomProducts);
export default productRouter;
