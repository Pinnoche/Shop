const express = require("express");
const router = express.Router();
const {
  signupUser,
  loginUser,
  userProfile,
} = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");


router.post("/signup", signupUser); 
router.post("/login", loginUser);
router.get("/profile/:id", requireAuth, userProfile); 

module.exports = router;