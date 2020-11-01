const mongoose = require('mongoose');

const {Schema} = mongoose;

const feedingSchema = new Schema({
  animalSpecies: {type: String, required: true},
  animalNickname: {type: String, required: true},
  food: {type: String, required: true},
  medicine: {type: String, required: false},
  goalWeightOfAnimal: {type: Number},
  actualWeightOfAnimal: {type: Number},
  amountOfFoodFed: {type: Number},
  leftoverFood: {type: Number, required: false},
  comments: {type: String, required: false},
  weatherConditions: {type: String, required: false},
  dateTime: {type: Date, required: true, default: Date.now},
  keeperName: {type: String, required: true},
});

const Feeding = mongoose.model('Feeding', feedingSchema);

module.exports = Feeding;