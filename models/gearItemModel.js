const mongoose = require('mongoose');

const gearItemSchema = new mongoose.Schema({
  brand: String,
  model: String,
  size: String,
  year: Number,
  weight: Number,
  weight_unit_of_measure: String,
  minimum_trail_weight: Number,
  minimum_trail_weight_unit_of_measure: String,
  material: String,
  manufacturer_warranty: String,
  packed_size: String,
  dimensions: String,
  catagory: String,
  gender: String,
  sleeping_pad_type: String,
  sleeping_pad_shape: String,
  insulated: Boolean,
  insulation_type: String,
  r_value: Number,
  sleeping_capacity: Number,
  pad_thickness: Number,
  seasons: Number
});

const GearItem = mongoose.model('GearItem', gearItemSchema);

module.exports = GearItem;
