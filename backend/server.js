import { config } from "dotenv";
config();
import express from "express";
import connectDb from "./db.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use(`${process.env.BASE_URL}/api/products`, productRouter);
app.use(`${process.env.BASE_URL}/api/user`, userRouter);
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
