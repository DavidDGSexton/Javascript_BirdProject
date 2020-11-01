const Animal = require('../models/animal');

exports.post_create_animal = function (req, res) {
    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    const newAnimal = new Animal({
        nickname: req.body.nickname,
        species: req.body.species,
        enabled: enabled,
    });

    console.log(newAnimal);

    newAnimal.save(function (err) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('../animals/view-animals');
        }
    });
};

exports.get_update_animal = function (req, res) {
    Animal.findOne({ _id: req.query.id }, function (err, animal) {
        if (err) {
            // handle error
        } else {
            console.log(animal);
            res.render('animals/edit-animals-form', { data: animal });
        }
    });
};


exports.put_update_animal = function (req, res) {
    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    const updateAnimal = {
        nickname: req.body.nickname,
        species: req.body.species,
        enabled: enabled,
    };

    Animal.findOneAndUpdate({ _id: req.body.id }, updateAnimal, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('../animals/view-animals');
        }
    });
};

exports.get_delete_animal = function (req, res) {
    Animal.findOne({ _id: req.query.id }, function (err, animal) {
        if (err) {
            // handle error
        } else {
            console.log(animal);
            res.render('animals/delete-animal', { data: animal });
        }
    });
};

exports.delete_animal = function (req, res) {
    Animal.findOneAndDelete({ _id: req.body.id }, function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('../animals/view-animals');
        }
    });
};

exports.get_view_animals = function (req, res) {
    Animal.find({}, function (err, animals) {
        if (err) {
            // handle error
        } else {
            res.render('animals/view-animals', { data: animals });
        }
    });
}

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



