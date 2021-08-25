const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const { auth } = require('../utils');

router.get('/profile', auth(),authController.getProfileInfo);
router.post('/isExist', auth(),authController.getIfExist);
router.put('/profile', auth(),authController.editProfileInfo);
router.put('/clearSkins', auth(),authController.clearSkins);

module.exports = router