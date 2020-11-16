const express = require('express');
const router = express.Router();
const medicinesController = require('../controllers/medicines-controller');
const authMiddleware = require('../middleware/ensureAuthenticated');

router.get('/view-medicines', authMiddleware.ensureAuthenticated, medicinesController.get_view_medicines);

router.get('/new-medicine-form', authMiddleware.ensureAuthenticated, medicinesController.get_new_medicine_form);

router.post('/create-medicine', authMiddleware.ensureAuthenticated, medicinesController.post_create_medicine);

router.post('/update-medicine', authMiddleware.ensureAuthenticated, medicinesController.put_update_medicine);

router.get('/update-medicine', authMiddleware.ensureAuthenticated, medicinesController.get_update_medicine);

router.get('/delete-medicine', authMiddleware.ensureAuthenticated, medicinesController.get_delete_medicine);

router.post('/delete-medicine', authMiddleware.ensureAuthenticated, medicinesController.delete_medicine);

module.exports = router;