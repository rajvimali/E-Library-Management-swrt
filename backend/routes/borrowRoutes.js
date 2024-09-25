const express = require("express");
const { borrowBook, returnBook } = require("../controllers/borrowController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.put("/borrow/:id", authMiddleware, borrowBook);
router.put("/return/:id", authMiddleware, returnBook);

module.exports = router;
