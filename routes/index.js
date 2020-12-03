var express = require('express');
var router = express.Router();

const authMiddleware = require('../middleware/ensureAuthenticated');
const feedingsController = require('../controllers/feedings-controller');

/* GET home page. */
router.get('/', authMiddleware.ensureAuthenticated, feedingsController.get_view_feedings);

module.exports = router;
