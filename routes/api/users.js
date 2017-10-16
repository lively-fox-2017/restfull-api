var express = require('express');
var router = express.Router();

const UserController = require('../../controllers/UserController');

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);

module.exports = router;
