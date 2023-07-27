const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      default: null,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    foodList: {
      type: Array,
      required: [true, "FoodList is required"],
      default: [],
    },
    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
    },
    discount: {
      type: Number,
      required: [true, "Discount is required"],
    },
    status: {},
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = {
  Order,
};
