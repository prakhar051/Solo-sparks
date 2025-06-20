
const express = require('express');
const router = express.Router();
const { submitReflection, getReflections } = require('../controllers/reflectionController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getReflections);
router.post('/', protect, submitReflection);

module.exports = router;
