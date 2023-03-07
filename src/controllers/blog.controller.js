const blogService = require('../services/blog.service');

const createBlog = async (req, res) => {
  const { id } = req.data;
  const { title, content, categoryIds } = req.body;
  
  const newBlog = await blogService.createBlog({ id, title, content, categoryIds });

  if (!newBlog) {
    return res.status(400).json({ message: 'Problem in post' });
  }
    
  return res.status(201).json(newBlog);
};

const getPostUserCategory = async (_req, res) => {
  const listPost = await blogService.getPostUserCategory();

  if (!listPost) return res.status(401).json({ message: 'Post not found' });

  return res.status(200).json(listPost);
};

const getPostUserCategoryById = async (req, res) => {
const { id } = req.params;

const postById = await blogService.getPostUserCategoryById(id);

if (!postById) return res.status(404).json({ message: 'Post does not exist' });

return res.status(200).json(postById);
};

module.exports = {
  createBlog,
  getPostUserCategory,
  getPostUserCategoryById,
};