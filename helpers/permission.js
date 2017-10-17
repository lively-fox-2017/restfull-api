'use strict';
const jwt = require('jsonwebtoken');

function parseToken(req, res, callback){
  let token =  req.headers.token;
  jwt.verify(req.headers.token, 'sshhh its secret', function(err, decoded){
    if(err){
      res.status(403).json({message:'Forbidden access',data:{}});
    }
    callback(decoded)
  })
}

class permission{
  static allowedAdmin(req, res, next){
    parseToken(req, res, function(decoded){
      if (decoded.role){
        if (decoded.role=='admin'){
          next()
        }else{
          res.status(403).json({message:'Forbidden Access'})
        }
      }
    })

  }

  static allowedUser(req, res, next){
    parseToken(req, res, function(decoded){
      if(decoded.username){
        next()
      }else{
        res.status(403).json({message:'Forbidden Access'})
      }
    })

  }
}

module.exports = permission;
