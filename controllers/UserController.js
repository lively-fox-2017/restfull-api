const Model = require('../models');

class UserController {

  static getAll (req, res) {

    Model.User.all({ order: [ [ 'createdAt', 'DESC' ] ] }).then((users) => {

      res.status(200).json(users);

    });

  }

  static create (req, res) {

    Model.User.create({

      username: req.body.username,
      password: req.body.password

    }).then((user) => {

      res.status(201).json({
        message: 'user successfully created',
        user: user
      });

    });

  }

  static getById (req, res) {

    Model.User.findById(req.params.id).then((user) => {

      res.status(200).json(user);

    });

  }

  static deleteById (req, res) {

    Model.User.destroy({

      where: { id: req.params.id }

    }).then((user) => {

      res.status(200).json({
        message: 'user successfully deleted'
      });

    });

  }

  static updateById (req, res) {

    Model.User.update(
      {
        username: req.body.username,
        password: req.body.password
      },
      {
        where: { id: req.params.id },
        individualHooks: true
      }
    ).then((user) => {

      res.status(200).json({
        message: 'user successfully updated'
      });

    });

  }

}

module.exports = UserController;
