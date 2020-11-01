const express = require('express');
const router = express.Router();
const animalsController = require('../controllers/animals-controller');

router.get('/daily-summary', animalsController.get_daily_summary);

router.get('/edit-animals-form', animalsController.get_edit_animals_form);

router.get('/new-animal-form', animalsController.get_new_animal_form);

router.get('/view-animals-detailed', animalsController.get_view_animals_detailed);

router.get('/view-animals', animalsController.get_view_animals);

router.post('/create-animal', animalsController.post_create_animal);

router.post('/update-animal', animalsController.put_update_animal);

router.get('/update-animal', animalsController.get_update_animal);

router.get('/delete-animal', animalsController.get_delete_animal);

router.post('/delete-animal', animalsController.delete_animal);

module.exports = router;