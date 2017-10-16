const express = require('express');
const router = express.Router();
const User = require('../controllers/user')

router.post('/', User.signUp)

module.exports = router
