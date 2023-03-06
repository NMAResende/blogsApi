const express = require('express');

const categoryController = require('../controllers/category.controller');
const validateToken = require('../middleware/validateToken');
const validateName = require('../middleware/validateName');

const categoryRouter = express.Router();

categoryRouter.post('/', 
validateName,
validateToken, 
categoryController.createCategory);

module.exports = categoryRouter;