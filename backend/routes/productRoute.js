const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProducts,
} = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(createProduct);

router.route("/get/products").get(getProducts);

module.exports = router;
