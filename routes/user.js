const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile/:id', ctrl.user.getUserProfile);
router.get('/profile/:id/images', ctrl.user.getUserImages)

module.exports = router;