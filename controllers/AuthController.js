const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Model = require('../models');

const UserController = require('./UserController');

class AuthController {

  static signup (req, res) {

    UserController.create(req, res);

  }

  static signin (req, res) {

    const options = {
      where: { username: req.body.username }
    };

    Model.User.findOne(options).then((user) => {

      if (user && bcrypt.compareSync(req.body.password, user.password)) {

        const payload = {
          username: user.username,
          role: user.role
        };

        jwt.sign(payload, 'rest-api-secret', (err, token) => {

          res.status(200).json({
            message: 'logged in',
            token: token
          });

        });

      } else {

        res.json({
          message: 'login failed'
        });

      }

    });

  }

}

module.exports = AuthController;
