var jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  LogIn: (req, res, next) => {
    var decoded = jwt.verify(req.headers.token, process.env.SECRET, function(err, decoded) {
      console.log(decoded, '<------ ini hasil decodnya ----')
      if (err) {
        res.send(' anda harus login terlebih dahulu oke !!!')
      } else {
        req.role = decoded.role
        next()
      }
    })
  },
  logAdmin: (req, res, next) => {
    if(req.role === 'admin'){
      next()
    } else {
      res.send('anda bukan admin')
    }
  }
}
