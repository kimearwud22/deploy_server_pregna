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
            },
            include: {
                breakfast: true,
                lunch: true,
                dinner: true,
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

getPrediksiUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const prediksi = await prisma.prediction.findUnique({
            where: {
                userId: parseInt(userId)
            },
            include: {
                breakfast: true,
                lunch: true,
                dinner: true,
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
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const createPrediksi = async (req, res) => {
    try {
      const { userId } = req.body;
  
      // Periksa apakah pengguna dengan ID tersebut ada
      const user = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
      });
  
      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'User not found with the given ID',
        });
      }
  
      const prediction = await prisma.prediction.create({
        data: {
          userId: parseInt(userId),
        },
      });
  
      res.json(prediction);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };
  

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
    getPrediksiUser,
    createPrediksi,
    updatePrediksi,
    deletePrediksi
}
