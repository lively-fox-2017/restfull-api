var express = require('express');
var router = express.Router();
var controller = require('../controllers/signup')

router.post('/', controller.signup)
module.exports = router;
