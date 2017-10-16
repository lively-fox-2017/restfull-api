'use strict'

const model = require("../models");
const helper = require("../helper/helper");
const jwt = require('jsonwebtoken');

class User {
  static signIn(req, res){
    model.User.findOne({where: {username: req.body.username}}).then((rowUser) => {
      if (rowUser) {
        let key = rowUser.secret;
        let pass = helper.secretHash(key, req.body.password);

        if (pass === rowUser.password) {
          let token = jwt.sign({
            username: rowUser.username,
            role: rowUser.role
          }, 'hacktiv8', { expiresIn: '1h' });
          res.json({
            message: "Berhasil Login",
            token: token
          })
        } else {
          res.json({
            message: "Maaf Password Salah",
          })
        }
      } else {
        res.json({
          message: "Maaf Username Salah"
        })
      }
    }).catch((err) => {
      res.json({
        message: err.errors[0].message
      })
    })
  }

  static findAll(req, res){
    model.User.findAll().then( rowsUser => {
      res.status(200).json({
        message : "Tampil Semua Data",
        data : rowsUser
      })
    }).catch((err) => {
      res.json({
        message: err.errors[0].message
      });
    })
  }

  static findOne(req, res){
    let token = req.headers.token
    let decoded = jwt.decode(token)
    model.User.findOne({where: {id: req.params.id}}).then((rowUser) => {
      if (decoded.role === 'user' && rowUser.username != decoded.username) {
        res.json({
          message: "Maaf anda tidak memiliki akses atas user tersebut"
        })
      } else {
        res.status(200).json({
          message: "Tampil 1 User",
          data: rowUser
        })
      }
    }).catch((err) => {
      res.json({
        message: err.errors[0].message
      });
    })
  }

  static create(req, res){
    let key = helper.secretKeyGen();
    let pass = helper.secretHash(key, req.body.password);

    // res.send(req.body.password)
    model.User.create({username: req.body.username, password: pass, secret: key, role: "user", createdAt: new Date(), updateAt: new Date()}).then((rowInput) => {
      res.status(200).json({
        message: "Berhasil Tambah User",
        data: rowInput
      })
    }).catch((err) => {
      res.json({
        message: err.errors[0].message
      });
    })
  }

  static delete(req, res){
    model.User.destroy({where:{id: req.params.id}}).then((rowHapus) => {
      res.status(200).json({
        message: "Berhasil Hapus"
      })
    }).catch((err) => {
      res.json({
        message: err.errors[0].message
      });
    })
  }

  static update(req, res){
    model.User.findOne({where: {id: req.params.id}}).then((rowUser) => {
      let key = rowUser.secret
      let pass = helper.secretHash(key, req.body.password);
      let token = req.headers.token
      let decoded = jwt.decode(token)

      if (decoded.role === 'user' && rowUser.username != decoded.username) {
        res.json({
          message: "Maaf anda tidak memiliki akses atas user tersebut"
        })
      } else {
        model.User.update({id: req.params.id, username: req.body.username, password: pass}, {where: {id: req.params.id}}).then((rowUpdate) => {
          res.status(200).json({
            message: "Berhasil Update"
          })
        }).catch((err) => {
          res.json({
            message: err.errors[0].message
          });
        })
      }
    }).catch((err) => {
      res.json({
        message: err.errors[0].message
      });
    })
  }
}

module.exports = User
