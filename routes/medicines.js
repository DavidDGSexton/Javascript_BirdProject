const express = require('express');
const router = express.Router();
const medicinesController = require('../controllers/medicines-controller');

router.get('/view-medicines', medicinesController.get_view_medicines);

router.get('/new-medicine-form', medicinesController.get_new_medicine_form);

router.post('/create-medicine', medicinesController.post_create_medicine);

router.post('/update-medicine', medicinesController.put_update_medicine);

router.get('/update-medicine', medicinesController.get_update_medicine);

router.get('/delete-medicine', medicinesController.get_delete_medicine);

router.post('/delete-medicine', medicinesController.delete_medicine);

module.exports = router;