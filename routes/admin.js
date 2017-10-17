var express = require('express');
var router = express.Router();
var adminController = require('../controller/adminController')

/* GET home page. */
router.post('/signup', adminController.signup)
router.post('/signin', adminController.sigIn)

module.exports = router;
