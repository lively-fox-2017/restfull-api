'use strict';
const Models = require('../models');
const encrypt = require('../helpers/encrypt');
const generateRandom = require('../helpers/generateRandom');
const jwt = require('jsonwebtoken');

function failedRequest(message){
  return {message, data:{}}
}

class Api{

  static signup(req, res){
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
            console.log(rawData);
            jwt.sign(rawData ,process.env.saltForToken , function(err, token){
              console.log(token,'asdlkajsdlijwailwjdoiawj092341-0293=1-=2pe][]');
              if(err){
                console.log('gagal');
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

            res.status(200).json(failedRequest('Gagal login'))
          }
        }else{
          result.message='Gagal login'
          result.data={};
          res.status(200).json(failedRequest('Gagal login'))
        }
      })
    }else{
      result.message='Gagal login'
      result.data={};
      res.status(200).json(failedRequest('Gagal login'))
    }
  }

  static getUsers(req, res){
    
  }

  static getUser(req, res){

  }

  static createUser(req, res){

  }

  static deleteUser(req, res){

  }

  static updateUser(req, res){

  }
}

module.exports = Api;
