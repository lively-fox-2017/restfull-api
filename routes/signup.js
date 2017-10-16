const express = require('express');
const router = express.Router();
const SignUp = require('../controller/signup')

router.post('/', SignUp.signUp)

module.exports = router;