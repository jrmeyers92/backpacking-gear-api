const express = require('express');
// const authController = require('../controllers/authController');
const gearItemController = require('../controllers/gearItemController');

const router = express.Router();

router
  .route('/')
  .get(gearItemController.getAllGearItems)
  .post(
    // authController.protect,
    // authController.restrictTo('admin'),
    gearItemController.createGearItem
  );

router
  .route('/:id')
  .get(gearItemController.getGearItem)
  .patch(
    // authController.protect,
    // authController.restrictTo('admin'),
    gearItemController.updateGearItem
  )
  .delete(
    // authController.protect,
    // authController.restrictTo('admin'),
    gearItemController.deleteGearItem
  );

module.exports = router;
