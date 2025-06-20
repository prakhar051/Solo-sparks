const express = require('express');
const router = express.Router();

// ✅ Correctly import all controller functions
const {
  registerUser,
  loginUser,
  updateProfile,
} = require('../controllers/authController');

// ✅ Correctly import the middleware
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);

// ✅ Only use the protect middleware if both it and updateProfile are imported
router.put('/profile', protect, updateProfile);

module.exports = router;
