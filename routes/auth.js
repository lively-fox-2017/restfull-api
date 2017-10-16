const express = require('express');
const router = express.Router();
const AuthCtrl = require('../controllers/authCtrl');

// Signup new user info
router.post('/signup', AuthCtrl.signUp);

// Signin to get access token
router.post('/signin', AuthCtrl.signIn);

module.exports = router;
