const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class Data {

  static signin(req, res){
    models.User.findOne({
      where:{
        username: req.body.username
      }
    })
    .then((dataUsers)=>{
      console.log(dataUsers);
      if(dataUsers == null){
        res.send('Anda belum login')
      } else if (bcrypt.hashSync(req.body.password, dataUsers.salt)===dataUsers.password) {
        let token = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          username: req.body.name,
          role: req.body.role
        }, 'visca el barca!!!')
        // res.send(token)
        res.send({
          "Message":"Berhasil Login, ZUKEK",
          token: token
        })

      }else if (bcrypt.hashSync(req.body.password, dataUsers.salt)!==dataUsers.password) {
        res.send('data login salah!')
      }

    })
    .catch(err=>{
      res.json(err)
    })
  }

  static validate(req, res, next){
    models.User.findAll()
    .then(dataUsers=>{
      jwt.verify(req.headers.token, 'visca el barca!!!', function(err, decoded) {
        // console.log(decoded.role);
        if(decoded.role ==='admin'){
          next()
        }else if (decoded.role ==='pacar') {
          next()
        }else {
          res.send('bukan pacar gw!!')
        }
      });
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static signup(req, res){
    models.User.create({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role
    })
   .then(()=>{
     res.send('User berhasil dibuat')
   })
   .catch(err=>{
     res.json(err)
   })
  }

  static findAll(req, res){
    models.User.findAll()
    .then(dataUsers=>{
      res.json(dataUsers)
    })
    .catch(err=>{
      res.json(err)
    })
  }

  static createData(req, res){
    models.User.create({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role
    })
   .then(()=>{
     res.send('data berhasil ditambah')
   })
   .catch(err=>{
     res.json(err)
   })
  }

  static updateData(req, res){
    var salt = bcrypt.genSaltSync(8);
    var hash = bcrypt.hashSync(req.body.password, salt);
    models.User.update({
      username: req.body.username,
      password: hash,
      role: req.body.role,
      salt: salt
    },{
      where : {
        id: req.params.id
      }
    })
    .then(()=>{
      res.send('data berhasil diubah')
    })
    .catch(err=>{
      res.json(err)
    })
  }

  static deleteData(req, res){
    models.User.destroy({
      where : {
        id:req.params.id
      }
    })
    .then(()=>{
      res.json('data berhasil dihapus')
    })
    .catch(err=>{
      res.json(err)
    })
  }

  static findById(req, res){
    models.User.findById(req.params.id)
    .then(dataUsers=>{
      res.json(dataUsers)
    })
    .catch(err=>{
      res.json(err)
    })
  }

}

module.exports = Data;
