const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  product_name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
  },
  product_id: {
    type: Number,
    required: [true, "Please enter product id"],
  },
  rfid_tag_id: {
    type: String,
    required: [true, "Please enter product RFID tag id"],
  },
  zone: {
    type: Number,
    required: [true, "Please enter zone of product"],
  },
  rack: {
    type: Number,
    required: [true, "Please enter rack of product"],
  },
  level: {
    type: Number,
    required: [true, "Please enter level of product"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter product quantity"],
    default: 1,
  },
  product_details: {
    type: String,
    required: [true, "Please enter product details"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  //   user: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "User",
  //     required: true,
  //   },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now,
  //   },
});

module.exports = mongoose.model("Product", productSchema);
