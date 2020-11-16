const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users-controller');
const authMiddleware = require('../middleware/ensureAuthenticated');

router.get('/view-users', authMiddleware.ensureAuthenticated, usersController.get_view_users);

router.get('/new-user-form', authMiddleware.ensureAuthenticated, usersController.get_new_user_form);

router.post('/create-user', authMiddleware.ensureAuthenticated, usersController.post_create_user);

router.post('/update-user', authMiddleware.ensureAuthenticated, usersController.put_update_user);

router.get('/update-user', authMiddleware.ensureAuthenticated, usersController.get_update_user);

router.get('/delete-user', authMiddleware.ensureAuthenticated, usersController.get_delete_user);

router.post('/delete-user', authMiddleware.ensureAuthenticated, usersController.delete_user);

module.exports = router;