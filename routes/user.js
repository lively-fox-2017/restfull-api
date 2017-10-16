const express = require('express');
const router = express.Router();
const User = require('../controller/user')

router.get('/', User.findAll)

router.get('/:id', User.findById)

router.put('/:id', User.update)

router.delete('/:id', User.delete)

module.exports = router;