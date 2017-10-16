const express = require('express');
const router = express.Router();
const SignIn = require('../controller/signin')

router.post('/', SignIn.signIn)

module.exports = router;