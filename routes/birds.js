const express = require('express');
const router = express.Router();

router.get('/new-bird-form', function(req, res, next) {
    res.render('birds/new-bird-form')
});

router.get('/daily-summary', function(req, res, next) {
    res.render('birds/daily-summary')
});

router.get('/edit-birds-form', function(req, res, next) {
    res.render('birds/edit-birds-form')
});

router.get('/view-birds-detailed', function(req, res, next) {
    res.render('birds/view-birds-detailed')
});

router.get('/view-birds', function(req, res, next) {
    res.render('birds/view-birds')
});






module.exports = router;