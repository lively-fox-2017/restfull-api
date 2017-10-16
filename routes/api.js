var express = require('express');
var router = express.Router();
const User = require("../controller/userController")
const helper = require('../helper/helper')

// SIGN UP
router.post('/signup', User.create)

// SIGN IN
router.post('/signin', User.signIn)

/* GET All users. */
router.get('/users', helper.authorizationAdmin, User.findAll)

// GET single user
router.get('/users/:id', helper.authorizationAdminUser, User.findOne)

// POST create user
router.post('/users', helper.authorizationAdmin, User.create)

// DELETE user
router.delete('/users/:id', helper.authorizationAdmin, User.delete)

// PUT(update) user
router.put('/users/:id', helper.authorizationAdminUser, User.update)

module.exports = router;
