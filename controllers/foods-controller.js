const Food = require('../models/food');

exports.get_new_food_form = function (req, res) {
    res.render('settings/foods/new-food-form',)
}

exports.post_create_food = function (req, res) {
    const newFood = new Food({
        name: req.body.name
    });

    newFood.save(function (err) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('../foods/view-foods');
        }
    });
};

exports.get_update_food = function (req, res) {
    Food.findOne({ _id: req.query.id }, function (err, food) {
        if (err) {
            // handle error
        } else {
            console.log(food);
            res.render('settings/foods/edit-food-form', { data: food });
        }
    });
};


exports.put_update_food = function (req, res) {
    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    const updateFood = {
        name: req.body.name
    };

    Food.findOneAndUpdate({ _id: req.body.id }, updateFood, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('../foods/view-foods');
        }
    });
};

exports.get_delete_food = function (req, res) {
    Food.findOne({ _id: req.query.id }, function (err, food) {
        if (err) {
            // handle error
        } else {
            console.log(food);
            res.render('settings/foods/delete-food', { data: food });
        }
    });
};

exports.delete_food = function (req, res) {
    Food.findOneAndDelete({ _id: req.body.id }, function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('../foods/view-foods');
        }
    });
};

exports.get_view_foods = function (req, res) {
    Food.find({}, function (err, foods) {
        if (err) {
            // handle error
        } else {
            res.render('settings/foods/view-foods', { data: foods });
        }
    });
}