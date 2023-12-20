const express = require('express');
const router = express.Router();
const prediksiController = require('../controller/prediksiController');
const dayPredictController = require('../controller/dayPredictController');

router.get('/', prediksiController.getAllPrediksi);
router.get('/:id', prediksiController.getPrediksiById);
router.get('/user/:userId', prediksiController.getPrediksiUser);
router.post('/', prediksiController.createPrediksi);
router.put('/:id', prediksiController.updatePrediksi);
router.delete('/:id', prediksiController.deletePrediksi);

//day predict
router.post('/breakfast/:predictionId', dayPredictController.createBreakfast);
router.post('/lunch/:predictionId', dayPredictController.createLunch);
router.post('/dinner/:predictionId', dayPredictController.createDinner);

module.exports = router;