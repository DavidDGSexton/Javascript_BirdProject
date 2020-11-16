const User = require('../models/user');

exports.get_new_user_form = function (req, res) {
    res.render('users/new-user-form')
}

exports.post_create_user = function (req, res) {
    // const newUser = new User({
    //     name: req.body.name
    // });

    const newUser = new User();

    
  // set the user's local credentials
  newUser.email = req.body.email;
  newUser.password = newUser.generateHash(req.body.password);
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.role = req.body.role;

    newUser.save(function (err) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('./view-users');
        }
    });
};

exports.get_update_user = function (req, res) {
    User.findOne({ _id: req.query.id }, function (err, user) {
        if (err) {
            // handle error
        } else {
            console.log(user);
            res.render('users/edit-user-form', { data: user });
        }
    });
};


exports.put_update_user = function (req, res) {
    // let enabled = false;
    // if (req.body.enabled == 'on') {
    //     enabled = true;
    // }

    const updateUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        role: req.body.role
    };

    //updates a user's password if they had a password in the first place
   const user = new User();
   if (req.body.password) {
    updateUser.password = user.generateHash(req.body.password);
    }

    User.findOneAndUpdate({ _id: req.body.id }, updateUser, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('./view-users');
        }
    });
};

exports.get_delete_user = function (req, res) {
    User.findOne({ _id: req.query.id }, function (err, user) {
        if (err) {
            // handle error
        } else {
            console.log(user);
            res.render('users/delete-user', { data: user });
        }
    });
};

exports.delete_user = async function (req, res) {
    await User.findOneAndDelete({ _id: req.body.id });
    res.redirect('../users/view-users');
};

exports.get_view_users = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            // handle error
        } else {
            res.render('users/view-users', { data: users });
        }
    });
}