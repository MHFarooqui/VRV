const express = require('express');

const { register, Login } = require('../Controllers/AuthenticationController');

const router = express.Router();

router.post("/register", register);
router.post("/login", Login);

module.exports = router;