const validateBlog = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content) {
    return res.status(400).json({ 
      message: 'Some required fields are missing' });
  }

  if (!categoryIds) {
    return res.status(400).json({ 
      message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = validateBlog;