const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users-controller');

router.get('/view-users', usersController.get_view_users);

router.get('/new-user-form', usersController.get_new_user_form);

router.post('/create-user', usersController.post_create_user);

router.post('/update-user', usersController.put_update_user);

router.get('/update-user', usersController.get_update_user);

router.get('/delete-user', usersController.get_delete_user);

router.post('/delete-user', usersController.delete_user);

module.exports = router;