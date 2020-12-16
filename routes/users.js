const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users-controller');
const authMiddleware = require('../middleware/ensureAuthenticated');
var fs = require('fs');
var path = require('path');
var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        console.log(file.fieldname);
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });


router.get('/view-users', authMiddleware.ensureAuthenticated, usersController.get_view_users);

router.get('/new-user-form', authMiddleware.ensureAuthenticated, usersController.get_new_user_form);

router.post('/create-user', authMiddleware.ensureAuthenticated, usersController.post_create_user);

router.post('/update-user', authMiddleware.ensureAuthenticated, usersController.put_update_user);

router.get('/update-user', authMiddleware.ensureAuthenticated, usersController.get_update_user);

router.get('/delete-user', authMiddleware.ensureAuthenticated, usersController.get_delete_user);

router.post('/delete-user', authMiddleware.ensureAuthenticated, usersController.delete_user);

router.get('/update-user-image', authMiddleware.ensureAuthenticated, usersController.get_update_user_image);

router.post('/add-profile-picture', authMiddleware.ensureAuthenticated, upload.single('image'), usersController.put_update_user_image);

module.exports = router;