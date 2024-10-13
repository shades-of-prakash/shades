import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
    {
        address_type: {
            type: String,
            enum: ["Billing", "Shipping"],
            required: true,
        },
        street_address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String },
        postal_code: { type: String, required: true },
        country: { type: String, required: true },
        is_default: { type: Boolean, default: false },
    },
    { _id: false }
);

const paymentMethodSchema = new mongoose.Schema(
    {
        payment_type: {
            type: String,
            enum: ["Credit Card", "Debit Card", "PayPal"],
            required: true,
        },
        provider: { type: String, required: true },
        account_number: { type: String, required: true },
        expiry_date: { type: Date },
        is_default: { type: Boolean, default: false },
    },
    { _id: false }
);

const wishlistItemSchema = new mongoose.Schema(
    {
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        added_at: { type: Date, default: Date.now },
    },
    { _id: false }
);

const cartItemSchema = new mongoose.Schema(
    {
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        size: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
    },
    { _id: false }
);

const orderItemSchema = new mongoose.Schema(
    {
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
    },
    { _id: false }
);

const orderSchema = new mongoose.Schema(
    {
        items: [orderItemSchema],
        total_price: { type: Number, required: true },
        created_at: { type: Date, default: Date.now },
        status: {
            type: String,
            enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
            default: "Pending",
        },
    },
    { _id: false }
);

const userSchema = new mongoose.Schema(
    {
        user_name: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password_hash: { type: String, required: true },
        first_name: { type: String },
        last_name: { type: String },
        date_of_birth: { type: String },
        phone_number: { type: String },
        created_at: { type: Date, default: Date.now },
        last_login: { type: Date },
        addresses: [addressSchema],
        payment_methods: [paymentMethodSchema],
        wishlist: [wishlistItemSchema],
        cart: [cartItemSchema], // Add cart schema
        orders: [orderSchema],
    },
    { timestamps: true } // Optional: Add timestamps for createdAt and updatedAt
);

const User = mongoose.model("User", userSchema);
export default User;
