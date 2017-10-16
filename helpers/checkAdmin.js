var jwt = require('jsonwebtoken');

function checkAdmin(req,res,next){
  jwt.verify(req.headers.token, '1', function(err, decoded) {
    if(err){
      res.json(200,{msg:'please login'})
    }
    else{
      if(decoded.role=='admin'){
        next()
      }
      else{
        res.json(200,{msg:'not admin'})
      }
    }
  });
}

module.exports = checkAdmin;
