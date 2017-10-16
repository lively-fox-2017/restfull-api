const Model = require('../models')

class User {
  constructor() {

  }

  static findAll(req,res) {
    Model.User.findAll()
    .then(dataUser => {
      res.send(dataUser)
    })
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

}

module.exports = User
