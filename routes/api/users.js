const express = require('express');
const Users = require('./../../controllers/users');
const adminAccess = require('./../../middlewares/adminAccess');

let router = express.Router();

router.get('/', adminAccess, Users.getAll);

router.get('/:id', Users.getOne);

router.post('/', adminAccess, Users.create);

router.delete('/:id', adminAccess, Users.delete);

router.put('/:id', Users.update);

module.exports = router;