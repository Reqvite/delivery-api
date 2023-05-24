const { Order } = require("../../models");


const addOrderController = async (req, res) => {
    const {
        name,
        email,
        phone,
        address,
        foodList,
    } = req.body;

    const order = new Order({
        name,
        email,
        phone,
        address,
        foodList,
    }
    );

    await order.save();
    res.status(201).json({ status: "succes", code: 201, order });
};

module.exports = {
    addOrderController,
};
