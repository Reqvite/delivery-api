const { WrongParametersError } = require("../../helpers/errors");
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

    if (!orders.length) {
        throw new WrongParametersError('No data were found by this email or phone.')
    }

    return res.json({
        status: "success",
        code: 200,
        orders
    });
};

module.exports = {
    getUserOrdersController,
};