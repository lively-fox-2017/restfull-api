var express = require('express');
var router = express.Router();
var userController = require('../controllers/user')

router.post('/', userController.loginUsers);

router.get('/', userController.valLogin)

module.exports = router;
