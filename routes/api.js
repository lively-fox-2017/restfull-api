const express = require('express');
const router = express.Router();
const api = require('../controller/api');

router.post('/signup', api.createUser);

router.post('/signin', api.signin);

router.get('/users', api.getUsers);

router.get('/users/:id', api.getUser);

router.post('/users', api.createUser);

router.delete('/users/:id', api.deleteUser);

router.put('/users/:id', api.updateUser);

module.exports = router;
