var express = require('express');
var router = express.Router();
var UserCtrl = require('../controllers/userCtrl');
var authHelper = require('../helpers/authHelper');

/* GET users listing. */

router.get('/', authHelper.isLogin, authHelper.isAdmin, UserCtrl.read);
router.get('/:id', authHelper.isLogin, UserCtrl.readOne);
router.post('/', authHelper.isLogin, authHelper.isAdmin, UserCtrl.create);
router.delete('/:id', authHelper.isLogin, authHelper.isAdmin, UserCtrl.destroy);
router.put('/:id', authHelper.isLogin, UserCtrl.update);

module.exports = router;
