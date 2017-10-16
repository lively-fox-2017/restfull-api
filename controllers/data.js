const dataModel = require('../models')
const jwt = require('jsonwebtoken');
const data = require('../data.json')
const bcrypt = require('bcrypt')
const saltRounds = 8

class Data {

  static signUp(req, res){
    bcrypt.genSalt(saltRounds, function(err, salt){
      bcrypt.hash(req.body.password, salt, function(err, hash){
        dataModel.User.create({
          username: req.body.username,
          password: hash,
          role: req.body.role,
          salt: hash
        })
        .then(function(){
          res.send('SIGNUP')
        })
      })
    })
  }

  static signIn(req, res){
    dataModel.User.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(function(user){
      let resPass = bcrypt.compareSync(req.body.password, user.salt)
      if(resPass == true){
        let obj = {
          username: user.username,
          role: user.role
        }
        var token = jwt.sign(obj, 'username world!')
        res.send(token)
      }
    })
  }

  static getData(req, res){
    var token = req.headers.token
    var decoded = jwt.verify(token, 'username world!', function(err, decoded){
      if(decoded.role == 'admin'){
        dataModel.User.findAll()
        .then(function(user){
          res.send(user)
        })
      }
    })
  }

  static getDataId(req, res){
    var token = req.headers.token
    var decoded = jwt.verify(token, 'username world!', function(err, decoded){
      if(decoded.role == 'admin' || decoded.role == 'users'){
        dataModel.User.findAll({
          where: {
            id: req.params.id
          }
        })
        .then(function(user){
          res.send(user)
        })
      }
    })
  }

  static saveData(req, res){
    var token = req.headers.token
    var decoded = jwt.verify(token, 'username world!', function(err, decoded){
      if(decoded.role == 'admin'){
        bcrypt.genSalt(saltRounds, function(err, salt){
          bcrypt.hash(req.body.password, salt, function(err, hash){
            dataModel.User.create({
              username: req.body.username,
              password: req.body.password,
              role: 'users',
              salt: hash
            })
            .then(function(){
              res.send('POST USERS')
            })
          })
        })
      }
    })
  }

  static deleteData(req, res){
    var token = req.headers.token
    var decoded = jwt.verify(token, 'username world!', function(err, decoded){
      if(decoded.role == 'admin'){
        dataModel.User.destroy({
          where: {
            id: req.params.id
          }
        })
        .then(function(){
          res.send('DESTROY OKE!')
        })
      }
    })
  }

  static updateData(req, res){
    var token = req.headers.token
    var decoded = jwt.verify(token, 'username world!', function(err, decoded){
      if(decoded.role == 'admin' || decoded.role == 'users'){
        bcrypt.genSalt(saltRounds, function(err, salt){
          bcrypt.hash(req.body.password, salt, function(err, hash){
            dataModel.User.update({
              username: req.body.username,
              password: req.body.password,
              role: 'users',
              salt: hash
            },
            {
              where: {
                id: req.params.id
              }
            })
            .then(function(){
              res.send('UPDATE OKE!')
            })
          })
        })
      }
    })
  }

}

module.exports = Data
