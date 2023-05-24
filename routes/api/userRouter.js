const express = require("express");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { addOrderController } = require("../../controllers/user");
const { orderValidation } = require("../../middlewares/validationMiddleware");


const router = express.Router();

router.post("/order", orderValidation, asyncWrapper(addOrderController));


module.exports = {
    userRouter: router,
};