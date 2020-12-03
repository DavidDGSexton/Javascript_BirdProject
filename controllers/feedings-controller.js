const Feeding = require('../models/feeding');
const Animal = require('../models/animal');
const Food = require('../models/food');
const Medicine = require('../models/medicine');

exports.get_new_feeding_form = async function (req, res) {
   // res.render("asda")  //this is here to test 500 error

    const animals = await Animal.find({enabled: true});
    const foods = await Food.find({});
    const medicines = await Medicine.find({});

    res.render('feedings/new-feeding-form', {animals: animals, foods: foods, medicines: medicines})
}

exports.post_create_feeding = async function (req, res) {
    console.log(req.body);

    const animal = await Animal.findOne({ _id: req.body.animalId });
    const food = await Food.findOne({ _id: req.body.foodId });
    const medicine = await Medicine.findOne({ _id: req.body.medicineId });

    const newFeeding = new Feeding({
        animalSpecies: animal.species,
        animalNickname: animal.nickname,
        food: food.name,
        medicine: medicine.name,
        goalWeightOfAnimal: req.body.goalWeight,
        actualWeightOfAnimal: req.body.actualWeight,
        amountOfFoodFed: req.body.amountOfFoodFed,
        leftoverFood: req.body.leftoverFood,
        comments: req.body.comments,
        weatherConditions: req.body.weatherConditions,
        dateTime: req.body.dateTime,
        keeperName: res.locals.user.firstName + ' ' + res.locals.user.lastName,
    });

    newFeeding.save(function (err) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('../feedings/view-feedings');
        }
    });
};

exports.get_update_feeding = async function (req, res) {

    const animals = await Animal.find({enabled: true});
    const foods = await Food.find({});
    const medicines = await Medicine.find({});

    Feeding.findOne({ _id: req.query.id }, function (err, feeding) {
        if (err) {
            // handle error
        } else {
            console.log(feeding);
            res.render('feedings/edit-feeding-form', { data: feeding, animals: animals, foods: foods, medicines: medicines });
            }
    });
};


exports.put_update_feeding = async function (req, res) {

    // const animal = await Animal.find({enabled: true});
    // const food = await Food.find({});
    // const medicine = await Medicine.find({});

    const animal = await Animal.findOne({ _id: req.body.animalId });
    const food = await Food.findOne({ _id: req.body.foodId });
    const medicine = await Medicine.findOne({ _id: req.body.medicineId });

    

    let enabled = false;
    if (req.body.enabled == 'on') {
        enabled = true;
    }

    const updateFeeding = {
        animalSpecies: animal.species,
        animalNickname: animal.nickname,
        food: food.name,
        medicine: medicine.name,
        goalWeightOfAnimal: req.body.goalWeight,
        actualWeightOfAnimal: req.body.actualWeight,
        amountOfFoodFed: req.body.amountOfFoodFed,
        leftoverFood: req.body.leftoverFood,
        comments: req.body.comments,
        weatherConditions: req.body.weatherConditions,
        dateTime: req.body.dateTime,
        keeperName: res.locals.user.firstName + ' ' + res.locals.user.lastName
    };
    
    Feeding.findOneAndUpdate({ _id: req.body.id }, updateFeeding, function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('../feedings/view-feedings');
        }
    });
};

exports.get_delete_feeding = function (req, res) {
    Feeding.findOne({ _id: req.query.id }, function (err, feeding) {
        if (err) {
            // handle error
        } else {
            console.log(feeding);
            res.render('feedings/delete-feeding', { data: feeding });
        }
    });
};

exports.delete_feeding = function (req, res) {
    Feeding.findOneAndDelete({ _id: req.body.id }, function (err) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            res.redirect('view-feedings');
        }
    });
};

exports.get_view_feedings = function (req, res) {
    Feeding.find({}, function (err, feedings) {
        if (err) {
            // handle error
        } else {
            res.render('feedings/view-feedings', { data: feedings });
        }
    });
}