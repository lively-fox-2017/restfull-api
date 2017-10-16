var express = require('express');
var router = express.Router();
const api = require('../controllers/api.js')

router.get('/', api.login);

router.get('/signup', api.register)

router.post('/signup', api.createUser);

router.post('/signin', api.loginUser);

router.get('/users',api.hasLogin, api.roleAdmin, api.getUser);

router.get('/users/:id', api.hasLogin, api.getUserById);

router.post('/users',api.hasLogin, api.roleAdmin, api.createUserAdmin);

router.delete('/users/:id', api.hasLogin, api.roleAdmin, api.deleteUser)

router.get('/index', api.index);

module.exports = router;
