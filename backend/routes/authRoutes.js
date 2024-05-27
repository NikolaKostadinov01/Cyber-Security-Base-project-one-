const express = require('express');
const { authenticateUser } = require('../auth');
const { loginUser, signupUser } = require('../controllers/authController');

const router = express.Router();

router.post('/login', authenticateUser, loginUser);
router.post('/signup', signupUser);

module.exports = router;
