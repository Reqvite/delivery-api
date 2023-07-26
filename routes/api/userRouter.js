const express = require("express");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  addOrderController,
  getUserOrdersController,
  getDiscountController,
  payStatusController,
} = require("../../controllers/user");
const { orderValidation } = require("../../middlewares/validationMiddleware");

const router = express.Router();

router.post("/order", orderValidation, asyncWrapper(addOrderController));
router.get("/", asyncWrapper(getUserOrdersController));
router.get("/discount", asyncWrapper(getDiscountController));
router.post("/status", asyncWrapper(payStatusController));

module.exports = {
  userRouter: router,
};
