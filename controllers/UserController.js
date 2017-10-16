const Model = require('../models');

class UserController {

  static notFound(req, res) {

    res.status(400).json({ message: 'user not found' });

  }

  static getAll (req, res) {

    const options = {
      order: [
        [ 'createdAt', 'DESC' ]
      ]
    };

    Model.User.all(options).then((users) => {

      res.status(200).json(users);

    });

  }

  static create (req, res) {

    const fields = {
      username: req.body.username,
      password: req.body.password
    };

    Model.User.create(fields).then((user) => {

      res.status(201).json({
        message: 'user successfully created',
        user: user
      });

    });

  }

  static getById (req, res) {

    Model.User.findById(req.params.id).then((user) => {

      if (user)
        res.status(200).json(user);
      else
        UserController.notFound(req, res);

    });

  }

  static deleteById (req, res) {

    const options = {
      where: { id: req.params.id }
    };

    Model.User.destroy(options).then((user) => {

      if (user) {
        res.status(200).json({
          message: 'user successfully deleted'
        });
      } else {
        UserController.notFound(req, res);
      }

    });

  }

  static updateById (req, res) {

    const fields = {
      username: req.body.username,
      password: req.body.password
    };

    const options = {
      where: { id: req.params.id },
      individualHooks: true
    };

    Model.User.update(fields, options).then((user) => {

      if (user) {
        res.status(200).json({
          message: 'user successfully updated'
        });
      } else {
        UserController.notFound(req, res);
      }

    });

  }

}

module.exports = UserController;
