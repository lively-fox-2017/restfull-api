const express = require('express');
const Users = require('./../../controllers/users');
const haveAdminAccess = require('./../../middlewares/auth/haveAdminAccess');
const haveUserAccess = require('./../../middlewares/auth/haveUserAccess');

let router = express.Router();

router.get('/', haveAdminAccess, Users.getAll);

router.get('/:id', haveUserAccess, Users.getOne);

router.post('/', haveAdminAccess, Users.create);

router.delete('/:id', haveAdminAccess, Users.delete);

router.put('/:id', haveUserAccess, Users.update);

module.exports = router;