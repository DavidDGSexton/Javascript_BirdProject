const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settings-controller');


router.get('/', settingsController.get_animal_settings);

router.get('/food-type', settingsController.get_animal_food_type);

router.get('/animals', settingsController.get_animals);

router.get('/meds', settingsController.get_meds);



module.exports = router;