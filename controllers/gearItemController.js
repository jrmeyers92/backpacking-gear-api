const GearItem = require('../models/gearItemModel');
const factory = require('./handlerFactory');

exports.getAllGearItems = factory.getAll(GearItem);
exports.getGearItem = factory.getOne(GearItem);
exports.createGearItem = factory.createOne(GearItem);
exports.updateGearItem = factory.updateOne(GearItem);
exports.deleteGearItem = factory.deleteOne(GearItem);
