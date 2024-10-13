import express from "express";
import getProducts from "../controllers/menProductController.js";

const productRouter = express.Router();
productRouter.get("/:gender", getProducts);
productRouter.get("/:gender/:category", getProducts);
export default productRouter;
