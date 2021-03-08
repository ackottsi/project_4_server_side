const express = require('express');
const router = express.Router();

const ctrl=require('../controllers');
router.get('/all', ctrl.images.getAll);
router.post('/all',ctrl.images.postImages)

module.exports = router;