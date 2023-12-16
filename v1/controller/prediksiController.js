const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllPrediksi = async (req, res) => {
    try {
        const prediksi = await prisma.prediction.findMany();
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

const getPrediksiById = async (req, res) => {
    try {
        const { id } = req.params;
        const prediksi = await prisma.prediction.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!prediksi) {
            return res.status(404).json({
                success: false,
                message: 'Prediksi not found'
            });
        }
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

const createPrediksi = async (req, res) => {
    try {
        const { food_name, accuraty, calcium, carbohydrate, fat, protein, vitamin } = req.body;
        const prediksi = await prisma.prediction.create({
            data: {
                food_name: food_name,
                accuraty: accuraty,
                calcium: calcium,
                carbohydrate: carbohydrate,
                fat: fat,
                protein: protein,
                vitamin: vitamin
            }
        });
        return res.status(201).json({
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

const updatePrediksi = async (req, res) => {
    try {
        const { id } = req.params;
        const { food_name, accuraty, calcium, carbohydrate, fat, protein, vitamin } = req.body;
        const prediksi = await prisma.prediction.update({
            where: {
                id: parseInt(id)
            },
            data: {
                food_name: food_name,
                accuraty: accuraty,
                calcium: calcium,
                carbohydrate: carbohydrate,
                fat: fat,
                protein: protein,
                vitamin: vitamin
            }
        });
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

const deletePrediksi = async (req, res) => {
    try {
        const { id } = req.params;
        const prediksi = await prisma.prediction.delete({
            where: {
                id: parseInt(id)
            }
        });
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


module.exports = {
    getAllPrediksi,
    getPrediksiById,
    createPrediksi,
    updatePrediksi,
    deletePrediksi
}
