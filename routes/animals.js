const express = require('express');
const router = express.Router();
const animalsController = require('../controllers/animals-controller');
const authMiddleware = require('../middleware/ensureAuthenticated');

router.get('/daily-summary', authMiddleware.ensureAuthenticated, animalsController.get_daily_summary);

router.get('/edit-animals-form', authMiddleware.ensureAuthenticated, animalsController.get_edit_animals_form);

router.get('/new-animal-form', authMiddleware.ensureAuthenticated, animalsController.get_new_animal_form);

router.get('/view-animals-detailed', authMiddleware.ensureAuthenticated, animalsController.get_view_animals_detailed);

router.get('/view-animals', authMiddleware.ensureAuthenticated, animalsController.get_view_animals);

router.post('/create-animal', authMiddleware.ensureAuthenticated, animalsController.post_create_animal);

router.post('/update-animal', authMiddleware.ensureAuthenticated, animalsController.put_update_animal);

router.get('/update-animal', authMiddleware.ensureAuthenticated, animalsController.get_update_animal);

router.get('/delete-animal', authMiddleware.ensureAuthenticated, animalsController.get_delete_animal);

router.post('/delete-animal', authMiddleware.ensureAuthenticated, animalsController.delete_animal);

module.exports = router;