const loginService = require('../services/login.service');

const authJWT = require('../auth/authJWT');

const isBodyValid = (email, password) => email && password;

const createLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const newUser = await loginService.createLogin({ email, password });

    if (!newUser || password !== newUser.password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = authJWT.createToken(email);

    return res.status(200).json({ token });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  createLogin,
};