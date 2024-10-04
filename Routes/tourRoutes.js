
const express = require('express');

const tourController = require('./../Controllers/tourController')

const router = express.Router();

router.route('/')
.get(tourController.getAlldata)
.post(tourController.putData);

router.route('/:id')
.get(tourController.getData)
.put(tourController.putData)
.patch(tourController.updateData)
.delete(tourController.deleteData);

module.exports = router;