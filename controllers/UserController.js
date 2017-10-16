const Model = require('../models');

class UserController {

  static getAll (req, res) {

    Model.User.all({ order: [ [ 'username', 'ASC' ] ] }).then((users) => {
      res.status(200).json(users);
    });

  }

  static getById (req, res) {
    Model.User.findById(req.params.id).then((user) => {
      res.status(200).json(user);
    });
  }

}

module.exports = UserController;
