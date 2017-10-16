const models = require('../models')

class Signup {
  constructor() {

  }
  static create(req,res){
    models.User.create({
      username:`${req.body.username}`,
      password:`${req.body.password}`,
      role:`${req.body.role}`,
    })
    .then((rows)=>{
      res.json({"message":"Signup sukses",
      "data":rows});
    })
    .catch(err=>{
      res.send(err);
    })
  }
}

module.exports = Signup
