var express = require('express');
var router = express.Router();
const verifyToken = require('../helpers/verifyToken');
const checkPrivilege = require('../helpers/checkPrivilege');
const UserCtrl = require('../controllers/userCtrl');

router.use(verifyToken);
router.use(checkPrivilege);

// Get users listing
router.get('/', UserCtrl.getUsers);

// Get specific user info
router.get('/:id', UserCtrl.getUser);

// Create a user
router.post('/', UserCtrl.createUser);

// Delete a user
router.delete('/:id', UserCtrl.deleteUser);

// Update a specific user info
router.put('/:id', UserCtrl.updateUser);

module.exports = router;
