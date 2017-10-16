const models = require('../models');
var jwt = require('jsonwebtoken');
const getHash = require('../helpers/cryptoHelper');

class AuthCtrl {
  static signIn(req, res) {
    models.User.findOne({
      where:{
        username:req.body.username
      }
    }).then((user)=>{
      var hash = getHash(req.body.password);
      if(hash == user.password) {
        var data = {username:user.username, role:user.role}
        var token = jwt.sign(data, process.env.TOKEN_KEY);
        data.token = token;
        res.json(data);
      }
      else {
        res.status(400).json({
          message:'Error when login'
        })
      }
    }).catch((err)=>{
      console.log(err)
      res.json({
        message:'Error when login catch',
        error:err
      })
    })
  }
  static signUp(req, res) {
    var data = {
      username:req.body.username,
      password:req.body.password,
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      email:req.body.email,
      role:req.body.role
    }
    models.User.create(data).then((inserted)=>{
      data.id = inserted.id;
      res.status(200).json({
        message:'Successfully Register',
        data:inserted
      })
    }).catch((err)=>{
      console.log(err)
      res.json({
        message:'Error when Register',
        error:err
      })
    })
  }
}

module.exports = AuthCtrl;
