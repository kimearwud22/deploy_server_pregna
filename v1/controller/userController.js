const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                role: true
            }
        });
        return res.status(200).json({
            success: true,
            users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                role: true
            }
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        return res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
const getUserByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                profile: true
            }
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        return res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getPredikById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                prediction: {
                    include:{
                        breakfast: true,
                        lunch: true,
                        dinner: true,
                    }
                }
            }
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        return res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, password, name } = req.body;
        const user = await prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data: {
                email,
                password,
                name
            }
        });
        return res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        });
        return res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const updateUserProfile = async (req, res) => {
    try {
      const { userId } = req.params;
      const { bio, berat_badan, umur_janin, jam_tidur } = req.body;
  
      // Perbarui profil pengguna
      const updatedProfile = await prisma.profile.updateMany({
        where: {
          userId: parseInt(userId),
        },
        data: {
          bio,
          berat_badan,
          umur_janin,
          jam_tidur,
        },
      });
  
      res.json({
        success: true,
        message: 'Profile updated successfully',
        data: updatedProfile,
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });
    }
  };
  
  

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    updateUserProfile,
    getUserByUserId,
    getPredikById
}