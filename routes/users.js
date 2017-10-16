var express = require('express');
var router = express.Router();
var UserCtrl = require('../controllers/userCtrl');
var authHelper = require('../helpers/authHelper');
var validationHelper = require('../helpers/validationHelper');

/* GET users listing. */

router.get('/', authHelper.isLogin, authHelper.isAdmin, UserCtrl.read);
router.get('/:id', authHelper.isLogin,function(req, res, next){
  var error = validationHelper(req.params, 'readOne');
  if(error.errors.length > 0){
    res.status(400).json(error);
  }
  else{
    next();
  }
}, UserCtrl.readOne);
router.post('/', authHelper.isLogin, authHelper.isAdmin,function(req, res, next){
  var error = validationHelper(req.body, 'create');
  if(error.errors.length > 0){
    res.status(400).json(error);
  }
  else{
    next();
  }
}, UserCtrl.create);
router.delete('/:id', authHelper.isLogin, authHelper.isAdmin,function(req, res, next){
  var error = validationHelper(req.params, 'destroy');
  if(error.errors.length > 0){
    res.status(400).json(error);
  }
  else{
    next();
  }
}, UserCtrl.destroy);
router.put('/:id', authHelper.isLogin,function(req, res, next){
  var error = validationHelper(req.params, 'update');
  if(error.errors.length > 0){
    res.status(400).json(error);
  }
  else{
    next();
  }
}, UserCtrl.update);

module.exports = router;
