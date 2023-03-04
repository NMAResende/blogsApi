const { User } = require('../models');

const schema = require('./validations/schema');

const createLogin = async ({ email, password }) => {
  const error = schema.validateEmailPassword.validate({ email, password });
  if (error.type) return error;

  const newUser = await User.create({ email, password });

  return newUser;
};

module.exports = {
  createLogin,
};