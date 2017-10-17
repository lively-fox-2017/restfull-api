var express = require('express');
var router = express.Router()
var Users = require('../controllers/users')

var checkAdmin = require('../helpers/checkAdmin')
var checkUser = require('../helpers/checkUser')


router.post('/signup', Users.signup)

router.post('/signin', Users.signin)

router.get('/users',checkAdmin,Users.getAll)

router.get('/users/:id',checkUser,Users.getId)

router.post('/users', checkAdmin,Users.signup)

router.delete('/users/:id' ,checkAdmin , Users.deleteUser )

router.put('/users/:id' ,checkUser , Users.editUser )


module.exports = router;
