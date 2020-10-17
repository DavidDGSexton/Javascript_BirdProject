
exports.get_daily_summary = function (req, res) {
    res.render('animals/daily-summary')
}

exports.get_edit_animals_form = function (req, res) {
    res.render('animals/edit-animals-form')
}

exports.get_new_animal_form = function (req, res) {
    res.render('animals/new-animal-form')
}

exports.get_view_animals_detailed = function (req, res) {
    res.render('animals/view-animals-detailed')
}

exports.get_view_animals = function (req, res) {
    res.render('animals/view-animals')
}





