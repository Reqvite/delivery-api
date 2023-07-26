const { addOrderController } = require("./addOrderController");
const { getUserOrdersController } = require("./getUserOrdersController");
const { getDiscountController } = require("./getDiscountController");
const { payStatusController } = require("./payStatusController");

module.exports = {
  addOrderController,
  getUserOrdersController,
  getDiscountController,
  payStatusController,
};
