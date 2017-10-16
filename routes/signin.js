const express = require('express');
const router = express.Router()
const data = require('../controllers/users');

router.post('/', data.signin)
// router.get('/', data.validate)

module.exports = router;
