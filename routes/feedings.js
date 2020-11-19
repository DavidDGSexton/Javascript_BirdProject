const express = require('express');
const router = express.Router();
const feedingsController = require('../controllers/feedings-controller');
const authMiddleware = require('../middleware/ensureAuthenticated');

router.get('/view-feedings', authMiddleware.ensureAuthenticated, feedingsController.get_view_feedings);

router.get('/new-feeding-form', authMiddleware.ensureAuthenticated, feedingsController.get_new_feeding_form);

router.post('/create-feeding', authMiddleware.ensureAuthenticated, feedingsController.post_create_feeding);

router.post('/update-feeding', authMiddleware.ensureAuthenticated, feedingsController.put_update_feeding);

router.get('/update-feeding', authMiddleware.ensureAuthenticated, feedingsController.get_update_feeding);

router.get('/delete-feeding', authMiddleware.ensureAuthenticated, feedingsController.get_delete_feeding);

router.post('/delete-feeding', authMiddleware.ensureAuthenticated, feedingsController.delete_feeding);

router.get('/view-feedings/export', authMiddleware.ensureAuthenticated, feedingsController.get_export);


module.exports = router;