const Feeding = require('../models/feeding');
const Animal = require('../models/animal');
const Food = require('../models/food');
const Medicine = require('../models/medicine');
const excel = require('exceljs');

exports.get_new_feeding_form = async function (req, res) {
   // res.render("asda")  //this is here to test 500 error

    const animals = await Animal.find({enabled: true});
    const foods = await Food.find({});
    const medicines = await Medicine.find({});

    res.render('feedings/new-feeding-form', {animals: animals, foods: foods, medicines: medicines})
}

exports.get_export = async function(req, res) {

    const feedings = await Feeding.find({dateTime: {
        $gte: new Date(new Date(req.query.initalDate).setHours(00, 00, 00)),
        $lte: new Date(new Date(req.query.endDate).setHours(23, 59, 59)),
    },
}).sort({dateTime: 'desc'});

   const workbook = new excel.Workbook();
   const worksheet = workbook.addWorksheet('Feedings');

   worksheet.columns = [
    {header: 'Date', key: 'dateTime', width: 15},
    {header: 'Species', key: 'animalSpecies', width: 20},
    {header: 'Nickname', key: 'animalNickname', width: 20},
    {header: 'Food', key: 'food', width: 16},
    {header: 'Medicine', key: 'medicine', width: 20},
    {header: 'Goal Weight (g)', key: 'goalWeightOfAnimal', width: 18},
    {header: 'Actual Weight (g)', key: 'actualWeightOfAnimal', width: 18},
    {header: 'Amount Fed (g)', key: 'amountOfFoodFed', width: 17},
    {header: 'Leftover Food (g)', key: 'leftoverFood', width: 18},
    {header: 'Weather Conditions', key: 'weatherConditions', width: 20},
    {header: 'Comments', key: 'comments', width: 50},
  ];

  //set worksheet data
  worksheet.addRows(feedings);

  //generate response
  res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=' + 'feedings.xlsx',
    );
    return workbook.xlsx.write(res).then(function() {
      res.status(200).end();
      
    });
    
};

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
        keeperName: res.locals.user.firstName + ' ' + res.locals.user.lastName
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

    exports.get_export_feedings = function (req, res) {
        Feeding.find({}, function (err, feedings) {
            if (err) {
                // handle error
            } else {
                res.render('feedings/export-feedings', { data: feedings });
            }
        });
    }

exports.get_all_export_feedings = async function(req, res) {
            const feedings = await Feeding.find({}).sort({dateTime: 'desc'});
          
            const workbook = new excel.Workbook();
            const worksheet = workbook.addWorksheet('Feedings');

            worksheet.columns = [
                {header: 'Date', key: 'dateTime', width: 15},
                {header: 'Species', key: 'animalSpecies', width: 20},
                {header: 'Nickname', key: 'animalNickname', width: 20},
                {header: 'Food', key: 'food', width: 16},
                {header: 'Medicine', key: 'medicine', width: 20},
                {header: 'Goal Weight (g)', key: 'goalWeightOfAnimal', width: 18},
                {header: 'Actual Weight (g)', key: 'actualWeightOfAnimal', width: 18},
                {header: 'Amount Fed (g)', key: 'amountOfFoodFed', width: 17},
                {header: 'Leftover Food (g)', key: 'leftoverFood', width: 18},
                {header: 'Weather Conditions', key: 'weatherConditions', width: 20},
                {header: 'Comments', key: 'comments', width: 50},
              ];
          
            worksheet.addRows(feedings);
          
            res.setHeader(
                'Content-Type',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            );
            res.setHeader(
                'Content-Disposition',
                'attachment; filename=' + 'feedings.xlsx',
            );
            return workbook.xlsx.write(res).then(function() {
              res.status(200).end();
            });
          };
