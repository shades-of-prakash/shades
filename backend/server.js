import { config } from "dotenv";
config();
import express from "express";
import connectDb from "./db.js";
import productRouter from "./routes/productRouter.js";
const app = express();
app.use(express.json());
app.use("/api/products", productRouter);
const port = process.env.PORT || 3001;
connectDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is  running on port:${port}`);
        });
    })
    .catch((error) => {
        console.error("Failed to connect to the database:", error.message);
        console.log("Please ensure you are connected to the internet.");
    });
