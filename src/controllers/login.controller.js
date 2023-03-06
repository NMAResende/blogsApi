const loginService = require('../services/login.service');

const authJWT = require('../auth/authJWT');

const isBodyValid = (email, password) => email && password;

const createLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const login = await loginService.createLogin({ email, password });

    if (!login) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = authJWT.createToken(login);

    return res.status(200).json({ token });
};

module.exports = {
  createLogin,
};