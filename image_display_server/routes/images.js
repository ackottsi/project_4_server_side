const express = require('express');
const router = express.Router();

const ctrl=require('../controllers');
router.get('/all', ctrl.images.getAll);
router.post('/',ctrl.images.postImages)

router.delete('/:id', ctrl.images.removeImage)


module.exports = router;