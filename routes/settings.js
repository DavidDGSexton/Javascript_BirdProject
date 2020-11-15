const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settings-controller');


router.get('/', settingsController.get_view_settings);


module.exports = router;