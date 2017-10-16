const crypto = require('crypto');
const jwt = require('jsonwebtoken')

module.exports = {
  secretKeyGen: function(){
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let secret = ""

    for(let i = 0; i < 6; i++) {
      secret += str[Math.floor(Math.random()*62)]
    }

    return secret
  },

  secretHash: function(key, password) {
    const hash = crypto.createHmac('md5', key).update(password).digest('hex');

    return hash;
  },

  authorizationAdmin: function(req, res, next){
    let secret = 'hacktiv8'
    let token = req.headers.token
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.json({
          message: "Maaf anda harus login terlebih dahulu"
        })
      } else {
        let decoded = jwt.decode(token)

        if (decoded.role === 'admin') {
          next()
        } else {
          res.json({
            message: "Maaf cuma admin yang boleh mengakses"
          })
        }
      }
    });
  },

  authorizationAdminUser: function(req, res, next){
    let secret = 'hacktiv8'
    let token = req.headers.token
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.json({
          message: "Maaf anda harus login terlebih dahulu"
        })
      } else {
        let decoded = jwt.decode(token)

        if (decoded.role === 'user' || decoded.role === 'admin') {
          next()
        } else {
          res.json({
            message: "Maaf cuma admin yang boleh mengakses"
          })
        }
      }
    });
  }

}
