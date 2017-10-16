var express = require('express');
var router = express.Router();

const Authenticate = require('../../middlewares/Authenticate');
const AuthorizeAdmin = require('../../middlewares/AuthorizeAdmin');

const UserController = require('../../controllers/UserController');

router.get('/', Authenticate, AuthorizeAdmin, UserController.getAll);
router.post('/', Authenticate, AuthorizeAdmin, UserController.create);
router.get('/:id', Authenticate, UserController.getById);
router.delete('/:id', Authenticate, AuthorizeAdmin, UserController.deleteById);
router.put('/:id', Authenticate, UserController.updateById);

module.exports = router;
