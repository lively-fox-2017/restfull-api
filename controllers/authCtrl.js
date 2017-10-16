class AuthCtrl {
  static signUp(req, res) {
    res.status(200).json({
      message: 'POST signup accessed!',
      data: req.body
    });
  }

  static signIn(req, res) {
    res.status(200).json({
      message: 'POST signin accessed!',
      data: req.body
    });
  }
}

module.exports = AuthCtrl;
