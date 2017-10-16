const express = require('express');
const users = require('./api/users');
const Auth = require('./../controllers/auth');
const anyRoleAccess = require('./../middlewares/anyRoleAccess');

let router = express.Router();

router.post('/signup', Auth.signup);
router.post('/signin', Auth.signin);

router.use('/users', anyRoleAccess, users);

module.exports = router;