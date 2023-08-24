const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
// Route Imports
const product = require("./routes/productRoute");

app.use("/api/v1", product);

module.exports = app;
