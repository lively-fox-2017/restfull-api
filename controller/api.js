'use strict';
const Models = require('../models');
const encrypt = require('../helpers/encrypt');
const generateRandom = require('../helpers/generateRandom');
const jwt = require('jsonwebtoken');

class internalHelper{
  static failedRequest(message){
    return {message, data:{}}
  }
}

class Api{

  static createUser(req, res){
    let username = req.body.username;
    let password = req.body.password;
    let role = req.body.role;
    let salt = generateRandom(5);
    let encryptedPassword = encrypt(password, salt);
    Models.User.create({username, password:encryptedPassword, role, salt}).then((user)=>{
      let result = {
        message:'user created',
        data:{
          username:user.username,
          role:user.role
        }
      }
      res.status(201).json(result);
    }).catch((err)=>{
      res.status(400).json(internalHelper.failedRequest('Bad request'))
    })
  }

  static signin(req, res){
    let inputUsername = req.body.username;
    let inputPassword = req.body.password;
    let result = {};
    //console.log(process.env.saltForToken);
    if (inputPassword && inputUsername){
      Models.User.findOne({where:{username:inputUsername}}).then((user)=>{
        if(user){
          let encryptInput = encrypt(inputPassword, user.salt);
          if(encryptInput==user.password){
                  //  console.log(user);
            let rawData= {
              username:user.username,
              role:user.role
            }
            //console.log(rawData);
            jwt.sign(rawData ,process.env.saltForToken , function(err, token){
              //console.log(token,'asdlkajsdlijwailwjdoiawj092341-0293=1-=2pe][]');
              if(err){
                //console.log('gagal');
              }else{
                result={
                  message:'Berhasil login',
                  data:{
                    token
                  }
                }
                res.status(200).json(result)
              }
            })
          }else{
            res.status(200).json(internalHelper.failedRequest('Gagal login'))
          }
        }else{
          res.status(200).json(internalHelper.failedRequest('Gagal login'))
        }
      }).catch((err) => {
        res.status(400).json(internalHelper.failedRequest('Bad request'))
      })
    }else{
      res.status(200).json(internalHelper.failedRequest('Gagal login'))
    }
  }

  static getUsers(req, res){
    let result={};
    Models.User.findAll().then((users)=>{
      result.message='Berhasil mendapatkan data'
      result.data={users};
      res.status(200).json(result);
    }).catch((err)=>{
      res.status(200).json(internalHelper.failedRequest('Gagal mendapatkan data'))
    })
  }

  static getUser(req, res){
    let id = req.params.id
    let result = {}
    Models.User.findById(id).then((user)=>{
      result.message = 'Berhasil mendapatkan data';
      result.data = {user};
      res.status(200).json(result)
    }).catch((err)=>{
      console.log(err);
      res.status(200).json(internalHelper.failedRequest('Gagal mendapatkan data'))
    })
  }

  static deleteUser(req, res){
    let id = req.params.id;
    let result = {};
    Models.User.findById(id).then((user)=>{
      if (user){
        result.data={user}
        user.destroy().then(()=>{
          result.message= 'Berhasil menghapus user!'
          res.status(200).json(result);
        })
      }else{
        res.status(400).json(internalHelper.failedRequest('User tidak ditemukan'))
      }

    }).catch((err) => {
      res.status(200).json(internalHelper.failedRequest('Gagal menghapus'))
    })
  }

  static updateUser(req, res){
    let id = req.params.id;
    let result={};
    Models.User.findById(id).then((user)=>{
      if(user){
        result.data={before:user};
        user.username=req.body.username;
        if(user.password!= encrypt(req.body.password, user.salt) ){
          let salt = generateRandom(5);
          user.password = encrypt(req.body.password, salt);
          user.salt = salt;
        }
        user.role=req.body.role;
        user.save().then(()=>{
          result.message = 'Berhasil mengubah user'
          result.data={
            before:{
              username:user.previous('username'),
              password:user.previous('password')==user.password?'same':'old',
              role:user.previous('role'),

            },
            after:{
              username:user.username,
              password:user.previous('password')==user.password?'same':'new',
              role:user.role,

            }
          }
          res.status(200).json(result)
        }).catch((err)=>{
          res.status(200).json(internalHelper.failedRequest('Gagal update user'))
        })
      }else{
        res.status(400).json(internalHelper.failedRequest('Gagal menemukan user'))
      }
    })
  }
}

module.exports = Api;
