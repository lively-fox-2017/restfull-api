const model = require('../models');
var dotenv = require('dotenv').config()
var jwt = require('jsonwebtoken');
const encryptAES256CTR = require('../helpers/encryptAES256CTR');
const decryptAES256CTR = require('../helpers/decryptAES256CTR');
class AuthCtrl {
  static signUp(req, res) {
    model.User.create({
        username: req.body.username,
        password: encryptAES256CTR(req.body.password),
        role: 'user',
        fullname: req.body.fullname,
        email: req.body.email,
      })
      .then(inserted => {
        res.status(200).json({
          message: 'POST signup accessed!',
          data: {
            username: req.body.username,
            role: 'user',
            fullname: req.body.fullname,
            email: req.body.email,
          }
        });
      })
      .catch(reason => {
        res.status(400).json({
          message: reason
        });
      });
  }

  static signIn(req, res) {
    console.log(process.env.SECRET);
    model.User.findOne({
        where: {
          username: req.body.username
        }
      })
      .then(user => {
        if (decryptAES256CTR(user.password) === req.body.password) {
          let data = {
            username: user.username,
            role: user.role,
            id: user.id
          };
          let result = {
            token: jwt.sign({
                data: data,
              },
              process.env.SECRET, {
                expiresIn: '1h'
              })
          }
          res.status(200).json({
            message: 'POST signin accessed!',
            data: result
          });
        } else {
          res.status(404).json({
            message: 'User not found'
          });
        }
      })
      .catch(reason => {
        res.status(400).json({
          message: reason
        });
      })
  }
}

module.exports = AuthCtrl;
