require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user");
const productsRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");

const app = express();

//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

//routing
app.use("/api/user", userRoutes);
app.use("/api", productsRoutes);
app.use("/api", cartRoutes);

//connect to db
mongoose.connect(process.env.MONGOURI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Connected to DB and listening to Port ", process.env.PORT);
  });
});
