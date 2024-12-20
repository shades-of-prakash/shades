import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Men, Women } from "../models/productModel.js";

const registerUser = async (req, res) => {
    try {
        const {
            user_name,
            email,
            password,
            first_name,
            last_name,
            date_of_birth,
            phone_number,
        } = req.body;
        // Check if user already exists
        const existingUsername = await User.findOne({ user_name });
        if (existingUsername) {
            return res
                .status(400)
                .json({ message: "User name  already exists." });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }
        const password_hash = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            user_name,
            password_hash,
            first_name,
            last_name,
            date_of_birth,
            phone_number,
        });

        await newUser.save();

        const token = jwt.sign(
            {
                id: newUser._id,
                email: newUser.email,
                user_name: newUser.user_name,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(201).json({
            message: "User registered successfully.",
            token, // Return the token in response
            user: {
                id: newUser._id,
                user_name: newUser.user_name,
                email: newUser.email,
                first_name: newUser.first_name,
                last_name: newUser.last_name,
            },
        });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: "Error registering user.", error });
    }
};

// User Login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res
                .status(400)
                .json({ message: "Invalid username or password." });
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res
                .status(400)
                .json({ message: "Invalid username or password." });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email, user_name: user.user_name },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );

        return res.status(200).json({ token, user });
    } catch (error) {
        return res.status(500).json({ message: "Error logging in.", error });
    }
};

// Get User Info
const getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password_hash"); // Exclude password hash from response
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error fetching user info.", error });
    }
};

const addAddress = async (req, res) => {
    try {
        const {
            address_type,
            street_address,
            city,
            state,
            postal_code,
            country,
            is_default,
        } = req.body;

        const address = {
            address_type,
            street_address,
            city,
            state,
            postal_code,
            country,
            is_default,
        };

        const user = await User.findById(req.user.userId);
        user.addresses.push(address);

        await user.save();
        return res.status(201).json({
            message: "Address added successfully.",
            addresses: user.addresses,
        });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: "Error adding address.", error });
    }
};
// Add or Remove from Wishlist
const addToWishlist = async (req, res) => {
    try {
        const { product_id } = req.body;
        const user = await User.findById(req.user.id);
        const isProductInWishlist = user.wishlist.some(
            (item) => item.product_id.toString() === product_id
        );

        if (isProductInWishlist) {
            // If it is, remove it from the wishlist
            user.wishlist = user.wishlist.filter(
                (item) => item.product_id.toString() !== product_id
            );
            await user.save();
            return res.status(200).json({
                message: "Product removed from wishlist successfully.",
                wishlist: user.wishlist,
            });
        } else {
            user.wishlist.push({ product_id });
            await user.save();
            console.log(user);
            return res.status(201).json({
                message: "Product added to wishlist successfully.",
                wishlist: user.wishlist,
            });
        }
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: "Error updating wishlist.", error });
    }
};

const addToCart = async (req, res) => {
    try {
        const { product_id, size } = req.body;
        const user = await User.findById(req.user.id);
        if (!size) {
            return res.status(400).json({ message: "Size is required." });
        }
        const cartItemIndex = user.cart.findIndex(
            (item) =>
                item.product_id.toString() === product_id && item.size === size
        );

        if (cartItemIndex !== -1) {
            if (user.cart[cartItemIndex].quantity < 10) {
                user.cart[cartItemIndex].quantity += 1;
                return res.status(200).json({
                    message: "Product quantity updated successfully.",
                    cart: user.cart,
                });
            } else {
                return res.status(400).json({
                    message: "Maximum quantity of 10 reached for this product.",
                });
            }
        } else {
            console.log(size);
            user.cart.push({ product_id, size, quantity: 1 });
            console.log(user.cart);
        }

        await user.save();

        return res.status(200).json({
            message: "Product added to cart successfully.",
            cart: user.cart,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error updating cart.", error });
    }
};

const createOrder = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user || user.cart.length === 0) {
            return res.status(400).json({ message: "Cart is empty." });
        }
        const productIds = user.cart.map((item) => item.product_id);

        const menProducts = await Men.find({ _id: { $in: productIds } });
        const womenProducts = await Women.find({ _id: { $in: productIds } });

        const products = [...menProducts, ...womenProducts];

        if (products.length === 0) {
            return res
                .status(400)
                .json({ message: "No products found for the given cart." });
        }

        const productMap = products.reduce((acc, product) => {
            acc[product._id] = product;
            return acc;
        }, {});

        // Map cart items to order items using the product map
        const orderItems = user.cart
            .map((item) => {
                const product = productMap[item.product_id];
                return product
                    ? {
                          product_id: product._id,
                          quantity: item.quantity,
                          price: product.price || 0,
                      }
                    : null;
            })
            .filter((item) => item !== null);

        if (orderItems.length === 0) {
            return res
                .status(400)
                .json({ message: "No valid products in the cart." });
        }

        // Calculate total price
        const total_price = orderItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );

        // Create a new order
        const newOrder = {
            items: orderItems,
            total_price,
            created_at: new Date(),
            status: "Pending",
        };

        // Save the new order to the user's orders array
        user.orders.push(newOrder);

        // Clear the user's cart
        user.cart = [];

        // Save both user data and the new order
        await user.save();
        console.log(user);
        // Return the response with order details
        return res.status(201).json({
            message: "Order created successfully.",
            order: newOrder,
        });
    } catch (error) {
        console.error("Error creating order:", error);
        return res
            .status(500)
            .json({ message: "Error creating order.", error: error.message });
    }
};

const getUserOrders = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).populate(
            "orders.items.product_id"
        );

        if (user.orders.length === 0) {
            return res.status(404).json({ message: "No orders found." });
        }

        return res.status(200).json(user.orders);
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: "Error fetching orders.", error });
    }
};

const getCartProductDetails = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user.cart.length) {
            return res.status(404).json({ message: "Cart is empty." });
        }

        const products = await Promise.all(
            user.cart.map(async (item) => {
                let product;

                product = await Men.findById(item.product_id);

                if (!product) {
                    product = await Women.findById(item.product_id);
                }

                return product
                    ? {
                          ...product.toObject(),
                          quantity: item.quantity,
                          size: item.size,
                      }
                    : null;
            })
        );
        console.log(products);
        return res.status(200).json(products.filter(Boolean)); // Filter out null values
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error fetching cart product details.",
            error,
        });
    }
};
const updateCartProductDetails = async (req, res) => {
    const { product_id, quantity } = req.body; // Expecting product_id and quantity in the request body

    try {
        // Find the user
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Find the product in the user's cart
        const cartItemIndex = user.cart.findIndex(
            (item) => item.product_id.toString() === product_id
        );
        if (cartItemIndex === -1) {
            return res
                .status(404)
                .json({ message: "Product not found in cart." });
        }

        // Update the quantity
        if (quantity < 1) {
            // If the quantity is less than 1, you might want to remove the item from the cart
            user.cart.splice(cartItemIndex, 1);
        } else {
            user.cart[cartItemIndex].quantity = quantity;
        }

        // Save the updated user cart
        await user.save();

        return res
            .status(200)
            .json({ message: "Cart updated successfully.", cart: user.cart });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error updating cart product details.",
            error,
        });
    }
};

const getWishlistProductDetails = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        console.log(user);

        if (!user.wishlist.length) {
            return res.status(404).json({ message: "Wishlist is empty." });
        }

        const products = await Promise.all(
            user.wishlist.map(async (item) => {
                let product;

                // Attempt to find the product in the Men collection first
                product = await Men.findById(item.product_id);

                // If not found, try the Women collection
                if (!product) {
                    product = await Women.findById(item.product_id);
                }

                return product;
            })
        );

        return res.status(200).json(products.filter(Boolean));
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error fetching wishlist product details.",
            error,
        });
    }
};

export {
    registerUser,
    loginUser,
    getUserInfo,
    addAddress,
    addToWishlist,
    addToCart,
    createOrder,
    getUserOrders,
    getCartProductDetails,
    getWishlistProductDetails,
    updateCartProductDetails,
};
