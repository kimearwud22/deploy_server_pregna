const express = require('express');
const router = express.Router();
const prediksiController = require('../controller/prediksiController');

router.get('/', prediksiController.getAllPrediksi);
router.get('/:id', prediksiController.getPrediksiById);
router.post('/', prediksiController.createPrediksi);
router.put('/:id', prediksiController.updatePrediksi);
router.delete('/:id', prediksiController.deletePrediksi);

module.exports = router;