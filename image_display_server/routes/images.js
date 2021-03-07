const express = require('express');
const router = express.Router();

const ctrl=require('../controllers');
router.get('/all', ctrl.images.getAll);

module.exports = router;