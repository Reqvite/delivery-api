const { Category } = require("../../models");

const getCategoriesController = async (req, res) => {
    const categories = await Category.distinct("category")
    return res.json({
        status: "success",
        code: 200,
        categories
    });
};

module.exports = {
    getCategoriesController,
};