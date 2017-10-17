const express = require('express');
const router = express.Router();
const model = require('../models');
const controller = require('../controller/userController');
const jwt = require('../helper/jsonWebToken');


router.get('/', jwt.isLogin,jwt.isAdmin,controller.getAllDataUsers);

router.post('/', jwt.isLogin,jwt.isAdmin,controller.createDataUsers);

router.get('/:id', jwt.isLogin,jwt.authUser,controller.findByIdUser);

router.put('/:id', jwt.isLogin,jwt.authUser,controller.editDataUser);

router.delete('/:id', jwt.isLogin,jwt.isAdmin,controller.deleteUser);


module.exports = router
