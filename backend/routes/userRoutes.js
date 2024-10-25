import express from "express";
import {
    registerUser,
    loginUser,
    getUserInfo,
    addAddress,
    addToWishlist,
    addToCart,
    getCartProductDetails,
    getWishlistProductDetails,
    updateCartProductDetails,
    createOrder,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", authMiddleware, getUserInfo);

router.put("/wishlist", authMiddleware, addToWishlist);

router.post("/cart", authMiddleware, addToCart);

router.post("/addresses", authMiddleware, addAddress);

router.post("/createorder", authMiddleware, createOrder);

router.get("/getcartitems", authMiddleware, getCartProductDetails);

router.get("/getwishlistitems", authMiddleware, getWishlistProductDetails);

router.patch("/updatecart", authMiddleware, updateCartProductDetails);

export default router;
