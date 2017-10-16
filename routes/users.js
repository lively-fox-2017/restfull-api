var express = require('express');
var router = express.Router();
var userController = require('../controller/userController')
var aut = require('../helper/autentikasi')

/* GET users listing. */
router.get('/', aut.LogIn, aut.logAdmin, userController.findAll);
router.post('/', aut.LogIn, aut.logAdmin, userController.createUser);
router.get('/:id', aut.LogIn, aut.logAdmin, userController.findByIdUser);
router.put('/:id', aut.LogIn, aut.logAdmin, userController.updateUser);
router.delete('/:id',  aut.LogIn, aut.logAdmin, userController.removeUser);

module.exports = router;
