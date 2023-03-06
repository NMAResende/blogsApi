const express = require('express');

const userController = require('../controllers/user.controller');
const validateDisplayName = require('../middleware/validateDisplayName');
const validateEmail = require('../middleware/validateEmail');
const validatePassword = require('../middleware/validatePassword');
const validateToken = require('../middleware/validateToken');

const userRouter = express.Router();

userRouter.post('/', 
validateDisplayName,
validateEmail,
validatePassword,
userController.createUser);

userRouter.get('/:id', 
validateToken,
userController.getUserById);

userRouter.get('/', 
validateToken,
userController.getUser);

userRouter.delete('/me',
validateToken,
userController.deleteUser);

module.exports = userRouter;