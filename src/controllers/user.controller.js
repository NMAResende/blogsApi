const userService = require('../services/user.service');

const authJWT = require('../auth/authJWT');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const ifEmailExist = await userService.emailExist(email);

    if (ifEmailExist) {
      return res.status(409).json({ message: 'User already registered' });
    }
    
    const newUser = await userService.createUser(displayName, email, password, image);
     
    const token = authJWT.createToken(newUser);
      
    return res.status(201).json({ token });
};

module.exports = {
  createUser,
};