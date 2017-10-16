var express = require('express');
var router = express.Router();
var userController = require('../controllers/user')

/* GET users listing. */
router.get('/', userController.viewUsers);

/* CREATE users listing. */
router.post('/', userController.createUsers);

/* DELETE users listing. */
router.delete('/:id', userController.deleteUsers);

/* UPDATE users listing. */
router.put('/:id', userController.updateUsers);

module.exports = router;
