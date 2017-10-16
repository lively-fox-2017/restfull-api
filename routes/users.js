const express = require('express');
const data = require('../controllers/users');
const router = express.Router();


/* GET users listing. */
router.get('/', data.validate, data.findAll)

router.get('/:id', data.findById)

router.post('/', data.createData)

router.put('/:id', data.updateData)

router.delete('/:id', data.deleteData)

module.exports = router;
