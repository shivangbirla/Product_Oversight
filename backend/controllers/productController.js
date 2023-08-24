const Product = require("../models/productModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.getAllProducts = (req, res) => {
  res.status(200).json({ message: "Route is working fine" });
};

// Create Product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  // req.body.user = req.bodu.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Product
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});
