const express = require('express');
const router = express.Router();
const animalsController = require('../controllers/animals-controller');

router.get('/daily-summary', animalsController.get_daily_summary);

router.get('/edit-animals-form', animalsController.get_edit_animals_form);

router.get('/new-animal-form', animalsController.get_new_animal_form);

router.get('/view-animals-detailed', animalsController.get_view_animals_detailed);

router.get('/view-animals', animalsController.get_view_animals);


// router.get('/new-animal-form', function(req, res, next) {
//     res.render('animals/new-animal-form')
// });

// router.get('/daily-summary', function(req, res, next) {
//     res.render('animals/daily-summary')
// });

// router.get('/edit-animals-form', function(req, res, next) {
//     res.render('animals/edit-animals-form')
// });

// router.get('/view-animals-detailed', function(req, res, next) {
//     res.render('animals/view-animals-detailed')
// });

// router.get('/view-animals', function(req, res, next) {
//     res.render('animals/view-animals')
// });

module.exports = router;