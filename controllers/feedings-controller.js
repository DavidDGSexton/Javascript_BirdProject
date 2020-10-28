//controller for feedings routes
exports.get_feedings_form = function (req, res) {
    res.render('feedings/feedings-form')
}

exports.get_view_feedings = function (req, res) {
    res.render('feedings/view-feedings')
}