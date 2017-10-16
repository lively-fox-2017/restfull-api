var express = require('express');
var router = express.Router();
const signin = require('../controller/signin')

/* GET users listing. */
router.post('/',signin.findByUser);


module.exports = router;
