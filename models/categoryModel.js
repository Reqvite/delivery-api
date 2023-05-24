const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: [true, "Category is required"],
        },
    },
);

const Category = mongoose.model("Category", categorySchema);

module.exports = {
    Category,
};