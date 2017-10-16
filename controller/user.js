const models = require('../models')
const jwt = require('jsonwebtoken');
const salt='josgandos'

class User {
  constructor() {

  }
  static findAll(req,res){
    models.User.findAll()
    .then(rows=>{
      res.send(rows);
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static findById(req,res){
    models.User.findById(req.params.id)
    .then(rows=>{
      res.send(rows);
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static create(req,res){
    models.User.create({
      username:`${req.body.username}`,
      password:`${req.body.password}`,
      role:`${req.body.role}`,
    })
    .then((rows)=>{
      res.json({"message":"data berhasil disimpan",
      "data":rows});
    })
    .catch(err=>{
      res.send(err);
    })
  }

  static update(req,res){
    // console.log(req.body);
    // console.log(req.params);
    models.User.update({
      username:`${req.body.username}`,
      password:`${req.body.password}`,
      role:`${req.body.role}`,
    },{
      where:{id:req.params.id},
      individualHooks: true
    })
    .then((rows)=>{
      res.json({"message":'data berhasil diupdate',
        "data":rows
      });
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static delete(req,res){
    // console.log(req.params);
    models.User.destroy({
      where:{
        id:req.params.id
      }
    })
    .then((rows)=>{
      res.json({"message":'hapus data berhasil',
        "data":rows
      });
    })
    .catch(err=>{
      res.send(err);
    })
  }

  static login(){

  }

  static verifyToken (req,res,next){
    var decoded = jwt.verify(req.headers.token, salt);
    // console.log(decoded)
    req.token = decoded // bar
    if (decoded.role=='admin') {
      next();
    } else {
      res.send('anda tidak memiliki akses')
    }

  }
}

module.exports = User
