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

const validateName = Joi.object({
  name: Joi.string().min(5).required(),
});

const validateBlog = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().min(5).required(),
  id: Joi.number().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

module.exports = {
  validateEmailPassword,
  validateUser,
  validateName,
  validateBlog,
};