const express = require("express");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { addOrderController, getUserOrdersController, getDiscountController } = require("../../controllers/user");
const { orderValidation } = require("../../middlewares/validationMiddleware");


const router = express.Router();

router.post("/order", orderValidation, asyncWrapper(addOrderController));
router.get("/", asyncWrapper(getUserOrdersController));
router.get("/discount", asyncWrapper(getDiscountController));



module.exports = {
    userRouter: router,
};