const express = require('express');
const router = express.Router();
const { saveBlindDesign, saveUser } = require('../controllers/blindController')

router.post('/designer', saveBlindDesign);
router.post('/signup', saveUser)

module.exports = router;