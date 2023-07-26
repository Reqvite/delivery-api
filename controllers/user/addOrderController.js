const { Order } = require("../../models");
const {
  getLiqPaySignature,
} = require("../../services/user/getLiqPaySignature");

const addOrderController = async (req, res) => {
  const { name, email, phone, address, foodList, totalPrice, discount } =
    req.body;

  const order = new Order({
    name,
    email,
    phone,
    address,
    foodList,
    totalPrice,
    discount,
  });

  const { _id } = await order.save();

  const liqPaySignature = getLiqPaySignature(totalPrice, _id);

  res.status(201).json({ status: "succes", code: 201, liqPaySignature });
};

module.exports = {
  addOrderController,
};
