
const express = require('express');
const router = express.Router();
const { getQuests, createQuest } = require('../controllers/questController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getQuests);
router.post('/', protect, createQuest);

module.exports = router;
