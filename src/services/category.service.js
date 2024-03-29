const { Category } = require('../models');
const schema = require('./validations/schema');

const createCategory = async ({ name }) => {
  const error = schema.validateName.validate({ name });
  if (error.type) return error;

  const newCategory = await Category.create({ name });

  return newCategory;
};

const getCategory = async () => {
  const categories = await Category.findAll();

  return categories;
};

const getCategoryById = async (id) => {
  const categoryId = await Category.findByPk(id);

  return categoryId;
};

module.exports = { 
  createCategory,
  getCategory,
  getCategoryById,
};