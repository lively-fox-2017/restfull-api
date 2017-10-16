const models = require('../models')
const jwt = require('jsonwebtoken');
const createHash=require('../helper/hash');
const salt='josgandos'

class Signin {
  constructor() {

  }
  static findByUser(req,res){
    // console.log(req.body);
    models.User.findOne({
      where:{username:req.body.username}
    })
    .then(rows=>{
      // console.log();
      // console.log(createHash(req.body.password,rows.dataValues.salt));
      if (rows.dataValues.password==createHash(req.body.password,rows.dataValues.salt)) {
        // console.log('masuk');
        let dataToken={
          "username":rows.dataValues.username,
          "role":rows.dataValues.role,
        }
        var token = jwt.sign(dataToken, salt);
        res.json({
          "message":"Login sukses",
          "token":token
        })
      } else {
        // console.log(token);
        // res.json(rows);
        res.send("Maaf password anda salah!")
      }
    })
    .catch(err=>{
      res.send(err);
    })
  }
}

module.exports = Signin
