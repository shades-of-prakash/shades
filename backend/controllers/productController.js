import { MongoClient } from "mongodb";
// import { config } from "dotenv";
// config();
const client = new MongoClient(process.env.MONGODB_URI);
async function getProducts(req, res) {
    try {
        const menCollection = client.db("SHADES").collection("Men");
        console.log(menCollection);
        const menProducts = await menCollection.find().limit(12).toArray();
        console.log(menProducts.length);
        res.json(menProducts);
    } catch (error) {
        console.error("Error during query:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export { getProducts };
