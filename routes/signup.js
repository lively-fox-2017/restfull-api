const express = require('express');
const data = require('../controllers/users');
const router = express.Router();


router.post('/', data.signup)

module.exports = router;
