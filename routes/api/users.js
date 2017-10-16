var express = require('express');
var router = express.Router();

const UserController = require('../../controllers/UserController');

router.get('/', UserController.getAll);
router.post('/', UserController.create);
router.get('/:id', UserController.getById);
router.delete('/:id', UserController.deleteById);
router.put('/:id', UserController.updateById);

module.exports = router;
