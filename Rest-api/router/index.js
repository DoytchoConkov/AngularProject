const router = require('express').Router();
const users = require('./users');
const skin = require('./skin');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/isExist', authController.getIfExist);

router.use('/users', users);
router.use('/skins', skin);

module.exports = router;
