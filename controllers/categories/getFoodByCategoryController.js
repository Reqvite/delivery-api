const { Food } = require("../../models");

const getFoodByCategoryController = async (req, res) => {
    const { category } = req.query;
    const food = await Food.find({ shop: { $regex: category, $options: "i" } },)

    return res.json({
        status: "success",
        code: 200,
        food
    });
};

module.exports = {
    getFoodByCategoryController,
};