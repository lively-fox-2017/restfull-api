const models = require('../models');

class UserCtrl {
  static read(req, res) {
    models.User.findAll().then((users)=>{
      res.status(200).json(users);
    });
  }
  static create(req, res) {
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
        message:'Successfully added',
        data:inserted
      })
    }).catch((err)=>{
      res.json({
        message:'Error when Inserting',
        error:err
      })
    })
  }
  static readOne(req, res) {
    models.User.findOne({
      where:{
        id: req.params.id
      }
    }).then((user)=>{
      res.json(user);
    })
  }
  static update(req, res) {
    var data = {
      id:req.params.id,
      username:req.body.username,
      password:req.body.password,
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      email:req.body.email,
      role:req.body.role
    }
    models.User.update(data, {
      individualHooks:true,
      where:{
        id:req.params.id
      }
    }).then((updated)=>{
      res.json({
        message:'Success Update',
        data:updated[1]
      })
    }).catch((err)=>{
      res.json({
        message:'Error when Updating',
        error:err
      })
    })
  }
  static destroy(req, res) {
    models.User.destroy({
      where:{
        id:req.params.id
      }
    }).then((deleted)=>{
      res.json({
        message:'Success Delete',
        data:deleted
      })
    }).catch((err)=>{
      res.json({
        message:'Error when Deleting',
        error:err
      })
    })
  }
}

module.exports = UserCtrl;
