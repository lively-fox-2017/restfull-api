const model = require('../models');
const encryptAES256CTR = require('../helpers/encryptAES256CTR');
class UserCtrl {
  static getUsers(req, res) {
    model.User.findAll()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(reason => {
        res.status(400).json({
          message: reason
        });
      })
  }

  static getUser(req, res) {
    model.User.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(user => {
        res.status(200).json(user);
      })
      .catch(reason => {
        res.status(400).json({
          message: reason
        });
      })
  }

  static createUser(req, res) {
    model.User.create({
        username: req.body.username,
        password: encryptAES256CTR(req.body.password),
        role: req.body.role,
        fullname: req.body.fullname,
        email: req.body.email,
      })
      .then(inserted => {
        res.status(200).json({
          message: 'New User Created',
          data: {
            username: req.body.username,
            role: req.body.role,
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

  static deleteUser(req, res) {
    model.User.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(numbers => {
        if (numbers > 0) {
          res.status(200).json({
            message: 'DELETE user accessed!',
            data: req.params.id
          });
        } else {
          res.status(404).json({
            message: 'User not found!',
          });
        }
      })
      .catch(reason => {
        res.status(400).json({
          message: reason
        });
      });
  }

  static updateUser(req, res) {
    model.User.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(numbers => {
        if (numbers > 0) {
          res.status(200).json({
            message: 'Update user accessed!',
            data: req.params.id
          });
        } else {
          res.status(404).json({
            message: 'User not found!',
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

module.exports = UserCtrl;
