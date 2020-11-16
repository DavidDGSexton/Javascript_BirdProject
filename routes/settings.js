const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settings-controller');
const authMiddleware = require('../middleware/ensureAuthenticated');


router.get('/', authMiddleware.ensureAuthenticated, settingsController.get_view_settings);


module.exports = router;