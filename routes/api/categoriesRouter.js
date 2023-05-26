const express = require("express");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { getCategoriesController, getFoodByCategoryController, getFoodCouponsController } = require("../../controllers/categories");

const router = express.Router();

router.get("/", asyncWrapper(getCategoriesController));
router.get("/category", asyncWrapper(getFoodByCategoryController));
router.get("/coupons", asyncWrapper(getFoodCouponsController));

module.exports = {
    categoriesRouter: router,
};