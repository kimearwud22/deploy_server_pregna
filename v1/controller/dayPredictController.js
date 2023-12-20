const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllBreakfast = async (req, res) => {
    try {
        const prediksi = await prisma.breakfast.findMany();
        return res.status(200).json({
            success: true,
            prediksi
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
const getAllLunch = async (req, res) => {
    try {
        const prediksi = await prisma.lunch.findMany();
        return res.status(200).json({
            success: true,
            prediksi
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
const getAllDinner = async (req, res) => {
    try {
        const prediksi = await prisma.dinner.findMany();
        return res.status(200).json({
            success: true,
            prediksi
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const createBreakfast = async (req, res) => {
    const { predictionId } = req.params;
    try {
      const { food_name, calcium, carbohydrate, fat, protein, vitamin } = req.body;
  
      // Periksa apakah prediksi dengan ID tersebut ada
      const prediction = await prisma.prediction.findUnique({
        where: { id: parseInt(predictionId) },
      });
  
      if (!prediction) {
        return res.status(400).json({
          success: false,
          message: 'Prediction not found with the given ID',
        });
      }
  
      const result = await prisma.breakfast.create({
        data: {
          food_name: food_name,
          calcium: calcium,
          carbohydrate: carbohydrate,
          fat: fat,
          protein: protein,
          vitamin: vitamin,
          predictionId: parseInt(predictionId),
        },
      });
  
      return res.status(201).json({
        success: true,
        result,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  
const createLunch = async (req, res) => {
    const { predictionId } = req.params;
    try {
      const { food_name, calcium, carbohydrate, fat, protein, vitamin } = req.body;
  
      // Periksa apakah prediksi dengan ID tersebut ada
      const prediction = await prisma.prediction.findUnique({
        where: { id: parseInt(predictionId) },
      });
  
      if (!prediction) {
        return res.status(400).json({
          success: false,
          message: 'Prediction not found with the given ID',
        });
      }
  
      const result = await prisma.lunch.create({
        data: {
          food_name: food_name,
          calcium: calcium,
          carbohydrate: carbohydrate,
          fat: fat,
          protein: protein,
          vitamin: vitamin,
          predictionId: parseInt(predictionId),
        },
      });
  
      return res.status(201).json({
        success: true,
        result,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
}
const createDinner = async (req, res) => {
    const { predictionId } = req.params;
    try {
      const { food_name, calcium, carbohydrate, fat, protein, vitamin } = req.body;
  
      // Periksa apakah prediksi dengan ID tersebut ada
      const prediction = await prisma.prediction.findUnique({
        where: { id: parseInt(predictionId) },
      });
  
      if (!prediction) {
        return res.status(400).json({
          success: false,
          message: 'Prediction not found with the given ID',
        });
      }
  
      const result = await prisma.dinner.create({
        data: {
          food_name: food_name,
          calcium: calcium,
          carbohydrate: carbohydrate,
          fat: fat,
          protein: protein,
          vitamin: vitamin,
          predictionId: parseInt(predictionId),
        },
      });
  
      return res.status(201).json({
        success: true,
        result,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
}

module.exports = {
    getAllBreakfast,
    getAllLunch,
    getAllDinner,
    createBreakfast,
    createLunch,
    createDinner
}