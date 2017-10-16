var express = require('express');
var router = express.Router();
var userController = require('../controller/userController')

/* GET users listing. */
router.get('/', userController.findAll);
router.post('/', userController.createUser);
router.get('/:id', userController.findByIdUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.removeUser);

module.exports = router;
