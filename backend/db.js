import mongoose from "mongoose";
const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/SHADES`
        );
        console.log(
            `MongoDB connected successfully: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};
export default connectDb;
