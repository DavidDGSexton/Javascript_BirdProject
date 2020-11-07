var express = require('express');
var router = express.Router();

const authMiddleware = require('../middleware/ensureAuthenticated');

/* GET home page. */
router.get('/', authMiddleware.ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Animal Project' });
});

module.exports = router;
