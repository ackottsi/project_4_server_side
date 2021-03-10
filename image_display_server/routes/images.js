const express = require('express');
const router = express.Router();

const ctrl=require('../controllers');
router.get('/all', ctrl.images.getAll);
router.get('/:id',ctrl.images.getImageById)

router.post('/all',ctrl.images.postImages)

router.delete('/:id', ctrl.images.removeImage)
router.put('/:id', ctrl.images.editImageInfo);


module.exports = router;