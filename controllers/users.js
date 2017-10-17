const models  = require('../models')
const getSalt = require('../helpers/generateSalt')
const encrypt = require('../helpers/encrypt')
const secret = '1'
var jwt = require('jsonwebtoken');


class Users{


  static getAll(req,res){
    models.User.findAll().then(dataUser=>{
      res.json(200,{msg:'view all user',data:dataUser})
    })
  }

  static getId(req,res){
    models.User.findById(req.params.id).then(dataUser=>{
      res.json(200,{msg:'view by user id',data:dataUser})
    })
  }

  static signup(req,res){
    let userSalt =  getSalt()
    let condition={
      username: req.body.username ,
      password: encrypt(req.body.password,userSalt) ,
      salt : userSalt ,
      role:req.body.role
    }
    models.User.create(condition).then(newUser=>{
      res.json(200,{msg:'add new user',data:newUser})
    }).catch(err=>{
      res.json(200,{msg:'signup fail',errMsg:err})
    })
  }

  static signin(req,res){
    let condition  = {
      where: {username:req.body.username}
    }
    models.User.findOne(condition).then(dataUser=>{
      if(dataUser){
        if(dataUser.password==encrypt(req.body.password,dataUser.salt)){
          jwt.sign({
            username:dataUser.username,
            role :dataUser.role,
            userid:dataUser.id
          },secret,(err,token)=>{
            res.json(200,{msg:'hi users',token:token})
          })
        }
        else{
          res.json(200,{msg:'wrong password'})
        }
      }
      else{
        res.json(200,{msg:'who are you'})
      }
    })
  }

  static deleteUser(req,res){
    let condition  = {
      where: {id:req.params.id}
    }
    models.User.destroy(condition).then((deletedData)=>{
      res.json(200,{msg:'deleted data',data:deletedData})
    })
  }

  static editUser(req,res){
    let edit={
        role:req.body.role
    }
    let condition  = {
       where: {id:req.params.id}
    }
    models.User.update(edit,condition).then((updatedData)=>{
      res.json(200,{msg:'update completed',data:updatedData})
    })
  }



}

module.exports = Users;
