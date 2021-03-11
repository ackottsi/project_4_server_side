const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile/:id', ctrl.user.getUserProfile);

module.exports = router;