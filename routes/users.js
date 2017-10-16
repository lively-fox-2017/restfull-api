var express = require('express');
var router = express.Router();
var controller = require('../controllers/user')

router.get('/', controller.getAll)
router.get('/:id', controller.getBy)
router.post('/', controller.add)
router.put('/:id', controller.edit)
router.delete('/:id', controller.delete)
module.exports = router;
