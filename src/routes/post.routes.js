const express = require('express');

const blogController = require('../controllers/blog.controller');
const validateToken = require('../middleware/validateToken');
const validateBlog = require('../middleware/validateBlog');
const validatePut = require('../middleware/validatePut');

const blogRouter = express.Router();

blogRouter.post('/', 
validateToken, 
validateBlog,
blogController.createBlog);

blogRouter.get('/search', 
validateToken,
blogController.searchPost);

blogRouter.get('/:id', 
validateToken,
blogController.getPostUserCategoryById);

blogRouter.get('/', 
validateToken, 
blogController.getPostUserCategory);

blogRouter.put('/:id', 
validateToken,
validatePut,
blogController.updatePost);

blogRouter.delete('/:id', 
validateToken,
blogController.deletePost);

module.exports = blogRouter;