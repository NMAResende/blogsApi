const Joi = require('joi');

const validateEmailPassword = Joi.object({
  email: Joi.string().email().required(), 
  password: Joi.string().min(6).required(),
});

const validateUser = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(), 
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

module.exports = {
  validateEmailPassword,
  validateUser,
};