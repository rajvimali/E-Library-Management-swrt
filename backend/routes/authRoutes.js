const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const router = express.Router();

// POST: Register a new user
router.post("/register", registerUser); // This should point to your registerUser function

// POST: Login a user
router.post("/login", loginUser); // This should point to your loginUser function

module.exports = router;
