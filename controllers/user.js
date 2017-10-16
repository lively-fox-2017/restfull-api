const Model = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const key = 'prana17';

class User {
  constructor() {

  }

  static findAll(req,res,next) {
    // Validasi Token
    jwt.verify(req.headers.token, (key), function(err, decoded) {
      // console.log(decoded.role) // bar
      if (decoded.role == 'admin') {
        Model.User.findAll()
        .then(dataUser => {
          res.send(dataUser)
        })
      } else {
        res.send('Auth Salah')
      }
    });
  }

  static createData(req,res) {
    Model.User.create({
      name : req.body.name
    })
    .then(() => {
      res.json('Data Berhasil Di Buat!')
    })
  }

  static deleteData(req,res) {
    Model.User.destroy({
      where : {
        id : req.params.id
      }
    })
    .then(() => {
      res.json('Data Berhasil Di Hapus')
    })
  }

  static updateData(req,res) {
    Model.User.update({
      name : req.body.name
    }, {
      where : {
        id : req.params.id
      }
    })
    .then(() => {
      res.json('Data Berhasil Di Ubah')
    })
  }

  static signUp(req,res) {
    Model.User.create({
      name: req.body.name,
      password: req.body.password,
      role: req.body.role
    })
    .then(() => {
      res.json('Data Berhasil Di Buat')
    })
  }

  static login(req,res) {
    Model.User.findOne({
      where : {
        name : req.body.name
      }
    })
    .then(dataUser => {
      if (dataUser == null) {
        res.json('Data Tidak Ada!')
      } else if (bcrypt.hashSync(req.body.password, dataUser.salt) !== dataUser.password) {
        res.json('Password Yang Anda Masukan Salah')
      } else if (bcrypt.hashSync(req.body.password, dataUser.salt) === dataUser.password) {
        var token = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          name: dataUser.name,
          role: dataUser.role,
        }, (key))
        // console.log(token);
        res.send({
          login: "Anda Berhasil login",
          message : "Silahkan Gunakan Token Di Bawah!",
          token:token
        })
      }
    })
  }

}

module.exports = User
