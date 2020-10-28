const express = require('express');
const router = express.Router();
const feedingsController = require('../controllers/feedings-controller');

router.get('/feeding-form', feedingsController.get_feedings_form);

router.get('/view-feedings', feedingsController.get_view_feedings);


module.exports = router;