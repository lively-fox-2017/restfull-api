const express = require('express');
const users = require('./api/users');
const Auth = require('./../controllers/auth');

let router = express.Router();

router.post('/signup', Auth.signup);
router.post('/signin', Auth.signin);

router.use('/users', users);

module.exports = router;