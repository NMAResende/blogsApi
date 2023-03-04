const { verifyToken } = require('../auth/authJWT');

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'No authorization' });
    }
    const payload = verifyToken(authorization);
    req.data = payload.data;
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = validateToken;