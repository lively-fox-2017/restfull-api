const express = require('express');
const router = express.Router();
const User = require('../controllers/user')

/* GET users listing. */
router.get('/', User.findAll);

/* POST users listing. */
router.post('/', User.createData);

/* DELETE users listing. */
router.delete('/:id', User.deleteData)

/* UPDATE users listing. */
router.put('/:id', User.updateData)


module.exports = router;
