const express = require('express');
const router = express.Router()
const controller = require('../controller/userController');
const jwt = require('../helper/jsonWebToken');


router.post('/signup', controller.signup);
router.post('/signin', controller.signin, controller.getAllDataUsers);

module.exports =router
