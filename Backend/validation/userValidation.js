const Joi = require('joi');

// validation schema to validate user data fields
const userValidationSchema = (data) => {
    const schemaValidation = Joi.object({
        Name: Joi.string().required(),
        Email: Joi.string().required(),
        MobileNumber: Joi.string().required(),
        Password: Joi.string().required(),
        Location: Joi.string().required(),
        Bio: Joi.string().required(),
    });

    return schemaValidation.validate(data);

};

module.exports.userValidationSchema = userValidationSchema;