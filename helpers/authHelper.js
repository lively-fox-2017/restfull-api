var jwt = require('jsonwebtoken');

function isAdmin(req, res, next) {
  jwt.verify(req.headers.token, process.env.TOKEN_KEY, function(err, decoded) {
    if (decoded.role == 'admin') {
      next()
    } else {
      res.send('Authorization failed')
    }
  });
}

function isLogin(req, res, next) {
  if (req.headers.token) {
    next()
  } else {
    res.send('Authentication failed');
  }
}

module.exports = {
  isLogin:isLogin,
  isAdmin:isAdmin
};
