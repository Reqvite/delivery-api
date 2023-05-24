const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    img_url: {
      type: String,
      required: [true, "Img is required"],
      default: null,
    },

    shop: {
      type: String,
      required: [true, "Shop is required"],
    },
    ingredients: {
      type: Array,
      required: [true, "Ingredients is required"],
      default: [],
    },
  },
);

const Food = mongoose.model("Food", foodSchema);

module.exports = {
  Food,
};