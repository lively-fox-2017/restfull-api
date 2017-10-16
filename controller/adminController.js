const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  signup: (req, res) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    let user = new User({
      username: req.body.username,
      password: hash,
      role: req.body.role
    })
    user.save((err, dataUser) => {
      if(err) {
        res.send(err)
      }else {
        res.send(dataUser)
      }
    })
  },
  sigIn: (req, res) => {
    User.findOne({
      username: req.body.username
    }, (err, dataUser) => {
      // console.log(dataUser, '<-----');
      var token = jwt.sign({
        id: dataUser._id,
        username: dataUser.username,
        role: dataUser.role
      }, process.env.SECRET)
      res.send(token)
    })
  }
}
