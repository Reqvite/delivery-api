const { WrongParametersError } = require("../../helpers/errors");
const { Coupon } = require("../../models");

const getDiscountController = async (req, res) => {
    const { title } = req.query;

    const discount = await Coupon.find({ title })

    if (!discount.length) {
        throw new WrongParametersError('Sorry, there is no such coupon.')
    }

    return res.json({
        status: "success",
        code: 200,
    });
};

module.exports = {
    getDiscountController,
};