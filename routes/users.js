var express = require('express');
var usersController = require('../controllers/users-controller');
const authMiddleware = require('../middleware/ensureAuthenticated');
var router = express.Router();

router.get('/', authMiddleware.ensureAuthenticated, usersController.get_update_user);

router.get('/create', authMiddleware.ensureAuthenticated, usersController.get_new_user_form);

router.post('/create', authMiddleware.ensureAuthenticated, usersController.post_create_user);

router.get('/update', authMiddleware.ensureAuthenticated, usersController.get_update_user);

router.post('/update', authMiddleware.ensureAuthenticated, usersController.put_update_user);

router.get('/delete', authMiddleware.ensureAuthenticated, usersController.delete_user);


module.exports = router;