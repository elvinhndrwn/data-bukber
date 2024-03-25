const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

// call controller
const country_controller = require('../controller/country_controller')

// Routes
router.get('/countries/all', country_controller.all)
router.get('/countries/:code', country_controller.getByCode)

// Export
module.exports = router;