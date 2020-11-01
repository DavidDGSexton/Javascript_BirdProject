const express = require('express');
const router = express.Router();
const foodsController = require('../controllers/foods-controller');

router.get('/view-foods', foodsController.get_view_foods);

router.get('/new-food-form', foodsController.get_new_food_form);

router.post('/create-food', foodsController.post_create_food);

router.post('/update-food', foodsController.put_update_food);

router.get('/update-food', foodsController.get_update_food);

router.get('/delete-food', foodsController.get_delete_food);

router.post('/delete-food', foodsController.delete_food);

module.exports = router;