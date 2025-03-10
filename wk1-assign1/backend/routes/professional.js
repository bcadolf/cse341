const express = require('express');
const profControl = require('../controllers/professional')
const router = express.Router();

// GET calls data when req by server
router.get('/', profControl.getData);
//Package it up to send the data back to app
module.exports = router;