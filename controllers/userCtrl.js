class UserCtrl {
  static getUsers(req, res) {
    res.status(200).json({
      message: 'GET users accessed!',
      data: [{
        id: 1,
        username: 'tes',
        password: 'pass',
        fullname: 'fullname',
        email: 'email1@gmail.com'
      }, {
        id: 2,
        username: 'tes2',
        password: 'pass',
        fullname: 'fullname2',
        email: 'email@email.com',
      }]
    });
  }

  static getUser(req, res) {
    res.status(200).json({
      message: 'GET user accessed!',
      data: {
        id: req.params.id,
        username: 'tes',
        password: 'pass',
        fullname: 'fullname',
        email: 'email1@gmail.com'
      }
    });
  }

  static createUser(req, res) {
    res.status(200).json({
      message: 'POST user accessed!',
      data: req.body
    });
  }

  static deleteUser(req, res) {
    res.status(200).json({
      message: 'DELETE user accessed!',
      data: req.params.id
    });
  }

  static updateUser(req, res) {
    res.status(200).json({
      message: 'PUT user accessed!',
      data: req.params.id
    });
  }
}

module.exports = UserCtrl;
