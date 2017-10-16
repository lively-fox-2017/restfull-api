var express = require('express');
var router = express.Router();
var AuthCtrl = require('../controllers/authCtrl');

router.post('/signin', AuthCtrl.signIn);
router.post('/signup', AuthCtrl.signUp);

module.exports = router;
