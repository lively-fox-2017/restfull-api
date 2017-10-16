const express = require('express');
const router = express.Router();
const api = require('../controller/api');
const permission = require('../helpers/permission');

router.post('/signup', api.createUser);

router.post('/signin', api.signin);

router.get('/users', permission.allowedAdmin, api.getUsers);

router.get('/users/:id', permission.allowedUser, api.getUser);

router.post('/users', api.createUser);

router.delete('/users/:id', permission.allowedAdmin, api.deleteUser);

router.put('/users/:id', permission.allowedUser, api.updateUser);

module.exports = router;
