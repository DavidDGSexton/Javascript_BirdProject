const User = require('../models/user');

exports.post_create_user = function (req, res) {
    const newUser = new User({
        email: req.body.email,
        password: newUser.generateHash(req.body.password),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
    });

    console.log(newUser);

    newUser.save(function (err) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('../users/index');
        }
    });
};

exports.get_update_user = function (req, res) {
    User.findOne({ _id: req.query.id }, function (err, users) {
        if (err) {
            // handle error 
        } else {
            console.log(users);
            res.render('users/index', { data: users });
        }
    });
};

exports.put_update_user = function (req, res) {
    let updateAnimal = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
    };

    if (req.body.password) {
        updateData.password = user.generateHash(req.body.password);
    }

    User.findOneAndUpdate({ _id: req.body.id }, updateAnimal, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('../users/index');
        }
    });
};

exports.get_delete_user = function (req, res) {
    User.findOne({ _id: req.query.id }, function (err, animal) {
        if (err) {
            // handle error
        } else {
            console.log(animal);
            res.render('users/index', { data: animal });
        }
    });
};

exports.delete_user = function (req, res) {
    User.findOneAndDelete({ _id: req.body.id }, function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('../users/index');
        }
    });
};

exports.get_view_user = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            // handle error
        } else {
            res.render('users/index', { data: users });
        }
    });
}


exports.get_new_user_form = function (req, res) {
    res.render('users/create')
}

