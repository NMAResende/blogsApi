const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryService.createCategory({ name });

  if (!newCategory) return res.status(400).json({ message: 'error in Category' });

  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};