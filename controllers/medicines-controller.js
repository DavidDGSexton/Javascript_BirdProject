const Medicine = require('../models/medicine');

exports.get_new_medicine_form = function (req, res) {
    res.render('medicines/new-med-form')
}

exports.post_create_medicine = function (req, res) {
    const newMedicine = new Medicine({
        name: req.body.name
    });

    newMedicine.save(function (err) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('./view-medicines');
        }
    });
};

exports.get_update_medicine = function (req, res) {
    Medicine.findOne({ _id: req.query.id }, function (err, medicine) {
        if (err) {
            // handle error
        } else {
            console.log(medicine);
            res.render('/medicines/edit-med-form', { data: medicine });
        }
    });
};


exports.put_update_medicine = function (req, res) {
    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    const updateMedicine = {
        name: req.body.name
    };

    Medicine.findOneAndUpdate({ _id: req.body.id }, updateMedicine, function (err, data) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('/medicines/view-medicines');
        }
    });
};

exports.get_delete_medicine = function (req, res) {
    Medicine.findOne({ _id: req.query.id }, function (err, medicine) {
        if (err) {
            // handle error
        } else {
            console.log(medicine);
            res.render('/medicines/delete-med', { data: medicine });
        }
    });
};

exports.delete_medicine = async function (req, res) {
    await Medicine.findOneAndDelete({ _id: req.body.id });
    res.redirect('/medicines/view-medicines');
};

exports.get_view_medicines = function (req, res) {
    Medicine.find({}, function (err, medicines) {
        if (err) {
            // handle error
        } else {
            res.render('medicines/view-meds', { data: medicines });
        }
    });
}