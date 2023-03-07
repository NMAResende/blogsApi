const { User } = require('../models');

const schema = require('./validations/schema');

const emailExist = async (email) => {
  const ifEmailExist = await User.findOne({ where: { email } });

  return ifEmailExist;
};

const createUser = async ({ displayName, email, password, image }) => {
  const error = schema.validateUser.validate({ displayName, email, password, image });
  if (error.type) return error;

  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};

const getUser = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });

  return users;
};

const getUserById = async ({ id }) => {
  // console.log(id);
  const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });

  return user;
};

const deleteUser = async (id) => {
  const user = await User.destroy({ where: { id } });

  return user;
};

module.exports = {
  emailExist,
  createUser,
  getUser,
  getUserById,
  deleteUser,
};