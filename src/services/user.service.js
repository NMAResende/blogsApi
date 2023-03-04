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

module.exports = {
  emailExist,
  createUser,
};