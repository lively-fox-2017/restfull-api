var express = require('express');
var router = express.Router();
const user = require('../controller/user')
// var verify = require('../helper/verify');

/* GET users listing. */
router.get('/', user.verifyToken, user.findAll);
router.get('/:id', user.verifyToken, user.findById);
router.post('/', user.verifyToken, user.create);
router.put('/:id', user.verifyToken, user.update);
router.delete('/:id', user.verifyToken, user.delete);

module.exports = router;
