const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

// Profile Route
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

// Employer Dashboard Route
router.get(
  "/employer-dashboard",
  protect,
  authorizeRoles("employer"),
  (req, res) => {
    res.json({ message: "Welcome Employer" });
  }
);

module.exports = router;