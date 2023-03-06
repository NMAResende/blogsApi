const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryService.createCategory({ name });

  if (!newCategory) return res.status(400).json({ message: 'error in Category' });

  return res.status(201).json(newCategory);
};

const getCategory = async (_req, res) => {
  const categories = await categoryService.getCategory();

  if (!categories) return res.status(400).json({ mssage: 'error in categories' });

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getCategory,
};