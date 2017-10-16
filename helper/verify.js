const models = require('../models')
const jwt = require('jsonwebtoken');
const salt='josgandos';

function token(req,res,next){
  console.log('masukkk',req.body);
  var decoded = jwt.verify(req.headers.token, salt);
  // console.log(decoded)
  req.token = decoded // bar
  if (decoded.role=='admin') {
    next();
  } else {
    res.send('anda tidak memiliki akses')
  }

}

module.exports = token;
