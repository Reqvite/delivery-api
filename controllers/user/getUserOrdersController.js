const { Order } = require("../../models");

const getUserOrdersController = async (req, res) => {
    const { searchValue } = req.query
    let searchParams;

    if (searchValue.includes('@')) {
        searchParams = { email: searchValue }
    } else {
        searchParams = { phone: searchValue }
    }

    const orders = await Order.find(searchParams)
    return res.json({
        status: "success",
        code: 200,
        orders
    });
};

module.exports = {
    getUserOrdersController,
};