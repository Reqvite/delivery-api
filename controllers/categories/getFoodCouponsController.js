const { Coupon } = require("../../models");

const getFoodCouponsController = async (req, res) => {
    const coupons = await Coupon.find({})


    return res.json({
        status: "success",
        code: 200,
        coupons,
    });
};

module.exports = {
    getFoodCouponsController,
};