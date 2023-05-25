const express = require("express");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { addOrderController, getUserOrdersController } = require("../../controllers/user");
const { orderValidation } = require("../../middlewares/validationMiddleware");


const router = express.Router();

router.post("/order", orderValidation, asyncWrapper(addOrderController));
router.get("/", asyncWrapper(getUserOrdersController));



module.exports = {
    userRouter: router,
};