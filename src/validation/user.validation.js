import Joi from "joi";

export const createStaffSchema = Joi.object({
    name: Joi.string().min(3).max(100).required()
    .messages({
        'string.base': 'Name must be a string',
        'string.empty': 'Name is required',
        'string.min': 'Name should have a minimum length of {#limit}',
        'string.max': 'Name should have a maximum length of {#limit}',
        'any.required': 'Name is required',
    }),
    username: Joi.string().min(3).max(30).required()
    .messages({
        'string.base': 'Username must be a string',
        'string.empty': 'Username is required',
        'string.min': 'Username should have a minimum length of {#limit}',
        'string.max': 'Username should have a maximum length of {#limit}',
        'any.required': 'Username is required',
    }),
    email: Joi.string().email().required()
    .messages({
        'string.base': 'Email must be a string',
        'string.empty': 'Email is required',
        'string.email': 'Email must be a valid email address',
        'any.required': 'Email is required',
    }),
    password: Joi.string().min(6).max(128).required()
    .messages({
        'string.base': 'Password must be a string',
        'string.empty': 'Password is required',
        'string.min': 'Password should have a minimum length of {#limit}',
        'string.max': 'Password should have a maximum length of {#limit}',
        'any.required': 'Password is required',
    }),
    role: Joi.string().valid("CASHIER", "PHARMACIST").required()
    .messages({
        'string.base': 'Role must be a string',
        'string.empty': 'Role is required',
        'any.only': 'Role must be either CASHIER or PHARMACIST',
        'any.required': 'Role is required',
    }),
}); 