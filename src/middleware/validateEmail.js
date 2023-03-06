const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const valideEmail = regex.test(email);

  if (!valideEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  
  return next();
};

module.exports = validateEmail;