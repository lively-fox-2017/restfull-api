const express = require('express');
const router = express.Router();

const AuthController = require('../../controllers/AuthController');
const users = require('./users');

router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);

router.use('/users', users);

module.exports = router;
