const express = require('express')
const router = express.Router()
const Controller = require('../controllers/data')

// GET
router.get('/users', Controller.getData)

// GET ID
router.get('/users/:id', Controller.getDataId)

// POST
router.post('/users', Controller.saveData)

// DELETE
router.delete('/users/:id', Controller.deleteData)

// UPDATE
router.put('/users/:id', Controller.updateData)

// SIGNUP
router.post('/signup', Controller.signUp)

// SIGNIN
router.post('/signin', Controller.signIn)

module.exports = router;
