var jwt = require('jsonwebtoken');

function checkUser(req,res,next){
  jwt.verify(req.headers.token, '1', function(err, decoded) {
    if(err){
      res.json(200,{msg:'please login'})
    }
    else{
      if(decoded.userid==req.params.id){
        next()
      }
      else{
        res.json(200,{msg:'not same user'})
      }
    }
  });
}

module.exports = checkUser;
