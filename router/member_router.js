const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

// call controller
const member_controller = require('../controller/member_controller')

// Routes
router.get('/', member_controller.all)
router.post('/members', member_controller.save)
router.get('/members/delete/:id', member_controller.delete)

// Export
module.exports = router;