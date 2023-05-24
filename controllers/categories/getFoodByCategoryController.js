const { Food } = require("../../models");

const getFoodByCategoryController = async (req, res) => {
    const { name } = req.query;
    const food = await Food.find({ shop: { $regex: name, $options: "i" } },)

    return res.json({
        status: "success",
        code: 200,
        food
    });
};

module.exports = {
    getFoodByCategoryController,
};