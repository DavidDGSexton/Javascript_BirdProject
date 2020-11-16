const express = require('express');
const router = express.Router();
const foodsController = require('../controllers/foods-controller');
const authMiddleware = require('../middleware/ensureAuthenticated');

router.get('/view-foods', authMiddleware.ensureAuthenticated, foodsController.get_view_foods);

router.get('/new-food-form', authMiddleware.ensureAuthenticated, foodsController.get_new_food_form);

router.post('/create-food', authMiddleware.ensureAuthenticated, foodsController.post_create_food);

router.post('/update-food', authMiddleware.ensureAuthenticated, foodsController.put_update_food);

router.get('/update-food', authMiddleware.ensureAuthenticated, foodsController.get_update_food);

router.get('/delete-food', authMiddleware.ensureAuthenticated, foodsController.get_delete_food);

router.post('/delete-food', authMiddleware.ensureAuthenticated, foodsController.delete_food);

module.exports = router;