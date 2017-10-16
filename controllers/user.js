const Model = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class Users {

  static createUsers(req,res) {
    Model.User.create({
      name: req.body.name
    })
    .then(data=>{
      res.json(data)
    })
  }

  static deleteUsers(req,res){
    Model.User.destroy({
      where:{
        id: req.params.id
      }
    })
    .then(()=>{
      res.json('Berhasil dihapus')
    })
  }

  static updateUsers(req,res){
    Model.User.update({
      name: req.body.name,
      password: req.body.password,
      role: req.body.role
    },{
      where: {
        id: req.params.id
      }
    })
    .then(()=>{
      res.json('Berhasil di Update')
    })
  }

  static viewUsers(req,res,next){
    Model.User.findAll()
    .then((data)=>{
      res.send(data)
      });
  }

  static signupUsers(req,res){
    Model.User.create({
      name: req.body.name,
      password: req.body.password,
      role: req.body.role
    })
    .then(()=>{
    res.json('Berhasil buat signup')
    })
  }

  static loginUsers(req,res){
    Model.User.findOne({
      where: {
        name: req.body.name
      }
    })
    .then(user=>{
      if(user==null){
        res.json('Anda Belum Masukan Data !')
      } else if(bcrypt.hashSync(req.body.password,user.salt) === user.password){
        var token = jwt.sign({
          data: req.body.name,
          role: req.body.role,
          exp: Math.floor(Date.now()/1000)+(60*60)
        }, 'Pemain no 7 Real Madrid')
        res.send({
          "Login":"Selamat Anda Berhasil Login",
          "Message":"Username & Role Kamu Match !",
          token:token
        })
      } else if(bcrypt.hashSync(req.body.password,user.salt) !== user.password){
        res.json('Gagal Login, Password Salah !')
      }
    })
  }

  static valLogin(req,res,next){
    jwt.verify(req.headers.token, 'Pemain no 7 Real Madrid', function(err, decoded) {
      if(decoded.role === 'admin'){
        next()
      } else {
        res.send('Kamu Bukan Admin')
      }
    })
  }

}

module.exports = Users
