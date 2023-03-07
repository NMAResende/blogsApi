const blogService = require('../services/blog.service');

const categoryService = require('../services/category.service');

const createBlog = async (req, res) => {
  const { id } = req.data;
  const { title, content, categoryIds } = req.body;
  // console.log({ title, content, categoryIds });

  const ifCategoryExist = await Promise.all(categoryIds
  .map(async (categoryid) => categoryService.getCategoryById(categoryid)));

  // console.log(ifCategoryExist);

  if (ifCategoryExist.includes(null)) {
 return res.status(400).json({
    message: 'one or more "categoryIds" not found', 
  }); 
}
  
  const newBlog = await blogService.createBlog({ 
    title, content, id, categoryIds });

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

const updatePost = async (req, res) => {
  const userId = req.data.id;
  const { id } = req.params;
  const { title, content } = req.body;

  const user = await blogService.getPostUserCategoryById(userId);
  console.log(user);
  if (user.userId !== userId) {
     return res.status(401).json({ message: 'Unauthorized user' }); 
  }

  const updatedPost = await blogService.updatePost({ id, title, content });

  if (!updatedPost) return res.status(404).json('Post does not exist');

  return res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
  const userId = req.data.id;
  const { id } = req.params;

  const user = await blogService.getPostUserCategoryById(id);
  console.log(user);
  if (user.userId !== userId) {
     return res.status(401).json({ message: 'Unauthorized user' }); 
  }

  const post = await blogService.deletePost(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(204).end();
};

const searchPost = async (req, res) => {
  const { q } = req.query;

  const listPost = await blogService.getPostUserCategory();

  if (!q) return res.status(200).json(listPost);

  const search = await blogService.searchPost(q);

  if (!search) return res.status(200).json([]);

  return res.status(200).json(search);
};

module.exports = {
  createBlog,
  getPostUserCategory,
  getPostUserCategoryById,
  updatePost,
  deletePost,
  searchPost,
};