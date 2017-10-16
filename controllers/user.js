const Model = require('../models')
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
      name: req.body.name
    },{
      where: {
        id: req.params.id
      }
    })
    .then(()=>{
      res.json('Berhasil di Update')
    })
  }

  static viewUsers(req,res){
    Model.User.findAll()
    .then((data)=>{
      res.send(data)
    })
  }

}

module.exports = Users
