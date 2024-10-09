import express from "express";
import { getProducts } from "../controllers/productController.js";
const productRouter = express.Router();
productRouter.get("/men", getProducts);
export default productRouter;
