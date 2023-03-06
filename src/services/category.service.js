const { Category } = require('../models');
const schema = require('./validations/schema');

const createCategory = async ({ name }) => {
  const error = schema.validateName.validate({ name });
  if (error.type) return error;

  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = { 
  createCategory,
};