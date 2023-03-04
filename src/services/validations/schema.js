const Joi = require('joi');

const validateEmailPassword = Joi.object({
  email: Joi.string().email().required(), 
  password: Joi.string().min(5).required(),
});

module.exports = {
  validateEmailPassword,
};