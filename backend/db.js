import mongoose from "mongoose";
const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}&dbName=SHADES`
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
