const { WrongParametersError } = require("../../helpers/errors");
const { Coupon } = require("../../models");

const getDiscountController = async (req, res) => {
    const { title } = req.query;

    const coupon = await Coupon.find({ title })

    if (!coupon.length) {
        throw new WrongParametersError('Sorry, there is no such coupon.')
    }

    return res.json({
        status: "success",
        code: 200,
        discount: coupon[0].discount
    });
};

module.exports = {
    getDiscountController,
};