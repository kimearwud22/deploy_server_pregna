const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.get('/profile/:id', UserController.getUserByUserId);
router.put('/:id', UserController.updateUser);
router.put('/user/:userId/profile', UserController.updateUserProfile);
router.delete('/:id', UserController.deleteUser);

module.exports = router;