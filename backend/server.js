import express from "express";
import data from "./data";
import config from "./config";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/userRoutes";
import bodyParser from "body-parser";
const cors = require("cors");

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();

app.use(bodyParser.json())

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/users", userRoute);

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x.id === productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: "Product Not Found." });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});