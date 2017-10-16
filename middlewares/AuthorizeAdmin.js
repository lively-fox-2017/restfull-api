const verifyToken = require('../helpers/verifyToken');

module.exports = (req, res, next) => {

  const token = req.headers['x-access-token'];
  const loggedInUser = verifyToken(token);

  if (loggedInUser.role === 'admin')
    next();
  else
    res.status(403).json({ message: 'forbidden, you\'re not authorized' });
};
