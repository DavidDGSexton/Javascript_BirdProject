const express = require('express');
const router = express.Router();

router.get('/new-animal-form', function(req, res, next) {
    res.render('animals/new-animal-form')
});

router.get('/daily-summary', function(req, res, next) {
    res.render('animals/daily-summary')
});

router.get('/edit-animals-form', function(req, res, next) {
    res.render('animals/edit-animals-form')
});

router.get('/view-animals-detailed', function(req, res, next) {
    res.render('animals/view-animals-detailed')
});

router.get('/view-animals', function(req, res, next) {
    res.render('animals/view-animals')
});






module.exports = router;