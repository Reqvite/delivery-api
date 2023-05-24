const express = require("express");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { getCategoriesController, getFoodByCategoryController } = require("../../controllers/categories");

const router = express.Router();

router.get("/", asyncWrapper(getCategoriesController));
router.get("/category", asyncWrapper(getFoodByCategoryController));

module.exports = {
    categoriesRouter: router,
};