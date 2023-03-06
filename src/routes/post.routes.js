const express = require('express');

const blogController = require('../controllers/blog.controller');
const validateToken = require('../middleware/validateToken');
const validateBlog = require('../middleware/validateBlog');

const blogRouter = express.Router();

blogRouter.post('/', 
validateToken, 
validateBlog,
blogController.createBlog);

blogRouter.get('/', blogController.getPostUserCategory);

module.exports = blogRouter;