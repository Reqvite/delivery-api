const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        coupon: {
            type: Number,
            required: [true, "Coupon is required"],
        },
    },
);

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = {
    Coupon,
};