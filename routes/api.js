const express = require('express');
const signin = require('./api/signin');
const signup = require('./api/signup');
const users = require('./api/users');

let router = express.Router();

router.use('/signin', signin);
router.use('/signup', signup);
router.use('/users', users);

module.exports = router;