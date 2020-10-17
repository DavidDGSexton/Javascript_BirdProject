
exports.get_animal_settings = function (req, res) {
    res.render('settings/index')
}

exports.get_animal_food_type = function (req, res) {
    res.render('settings/food-type')
}

exports.get_animals = function (req, res) {
    res.render('settings/animals')
}

exports.get_meds = function (req, res) {
    res.render('settings/meds')
}

