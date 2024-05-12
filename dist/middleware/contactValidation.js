"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateContact = void 0;
const Joi = require('joi');
const validateContact = (req, res, next) => {
    addDefaultNumberType(req.body);
    const phoneNumberSchema = Joi.object({
        number: Joi.string().required(),
        type: Joi.string().valid('MOBILE', 'HOME', 'WORK')
    });
    const metadataSchema = Joi.object({
        email: Joi.string().email(),
        address: Joi.string(),
        website: Joi.string(),
        birthdate: Joi.string().isoDate(),
        notes: Joi.string()
    });
    const contactSchema = Joi.object({
        name: Joi.string().required(),
        surname: Joi.string(),
        picture: Joi.string(),
        phoneNumbers: Joi.array().items(phoneNumberSchema).required(),
        metadata: metadataSchema.required(),
        user_username: Joi.string().required()
    });
    const { error } = contactSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.validateContact = validateContact;
function addDefaultNumberType(reqBody) {
    for (const phoneNumber of reqBody.phoneNumbers) {
        if (!phoneNumber.type) {
            phoneNumber.type = 'MOBILE';
        }
    }
}
