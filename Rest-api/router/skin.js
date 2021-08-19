const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { skinController } = require('../controllers');

router.get('/', skinController.getSkins);
router.post('/', auth(), skinController.createSkin);

router.put('/:skinId', auth(), skinController.subscribe);

module.exports = router