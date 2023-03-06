const userService = require('../services/user.service');

const authJWT = require('../auth/authJWT');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const ifEmailExist = await userService.emailExist(email);

    if (ifEmailExist) {
      return res.status(409).json({ message: 'User already registered' });
    }
    
    const newUser = await userService.createUser({ displayName, email, password, image });

    if (!newUser) {
      return res.status(400).json({ message: 'Users not found' });
    }
     
    const token = authJWT.createToken(newUser);
      
    return res.status(201).json({ token });
};

const getUser = async (_req, res) => {
  const users = await userService.getUser();

  if (!users) return res.status(401).json({ message: 'Users not found' });

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getUserById({ id });

  if (!user) return res.status(404).json({ message: 'User not found' });

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getUser,
  getUserById,
};