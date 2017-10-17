var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  jwt.verify(req.headers.token, '53cr3tKEY', function(err, decoded) {
    if (req.headers.token) {
      if (err) {
        res.status(401).json({
          message: err
        });
      } else {
        req.decoded = decoded;
        next();
      }
    } else {
      res.status(400).json({
        message: 'Token undefined'
      });
    }
  })
};
