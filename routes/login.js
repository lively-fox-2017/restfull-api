const express = require('express');
const router = express.Router();
const User = require('../controllers/user')

router.post('/', User.login)

module.exports = router;
