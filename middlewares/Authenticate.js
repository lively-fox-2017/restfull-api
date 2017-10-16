const verifyToken = require('../helpers/verifyToken');

module.exports = (req, res, next) => {

  const token = req.headers['x-access-token'];
  const loggedInUser = verifyToken(token);

  if (loggedInUser) {

    next();

  } else {

    res.status(403).json({ message: 'please login first' });

  }

};
