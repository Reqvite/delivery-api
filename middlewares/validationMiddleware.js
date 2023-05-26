const Joi = require("joi");
const { ValidationError } = require("../helpers/errors");

module.exports = {
    orderValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string()
                .required(),
            phone: Joi.string()
                .required(),
            address: Joi.string().required(),
            foodList: Joi.array()
        });

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            next(new ValidationError(validationResult.error.details[0].message));
        }
        next();
    },
}