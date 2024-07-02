const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./model/product");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("It is running");
});

app.post("/product", async (req, res) => {
  try {
    const result = await Product.create(req.body);
    console.log(result);
    res.send({ status: "success" });
  } catch (err) {
    console.error(err);
    res.send({ status: "error", message: err.message });
  }
});

app.get("/product", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send({ status: "success", data: products });
  } catch (err) {
    console.error(err.message);
    res.send({ status: "error", message: err.message });
  }
});

(async () => {
  try {
    await mongoose.connect(process.env.connectionString);
    console.log("Connected to MongoDB successfully!");
    app.listen(3002, () => console.log("Server listening on port 3002"));
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
})();
