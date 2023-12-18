const express = require('express');
const router = express.Router();
const ProfileController = require('../controller/profileController');

router.get('/', ProfileController.getAllProfile);
router.get('/:id', ProfileController.getProfileById);
router.post('/', ProfileController.createProfile);
router.put('/:id', ProfileController.updateProfile);
router.get('/user/:userId', ProfileController.getProfileUserId);
router.put('/user/:userId', ProfileController.updateProfileByUserId);
router.delete('/:id', ProfileController.deleteProfile);

module.exports = router;