const express = require('express');
const router = express.Router();
const feedingsController = require('../controllers/feedings-controller');

router.get('/view-feedings', feedingsController.get_view_feedings);

router.get('/new-feeding-form', feedingsController.get_new_feeding_form);

router.post('/create-feeding', feedingsController.post_create_feeding);

router.post('/update-feeding', feedingsController.put_update_feeding);

router.get('/update-feeding', feedingsController.get_update_feeding);

router.get('/delete-feeding', feedingsController.get_delete_feeding);

router.post('/delete-feeding', feedingsController.delete_feeding);


module.exports = router;