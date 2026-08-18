const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
// const upload = require("../middleware/uploadMiddleware");
const  {registerUser, getProfile, loginUser, logout} = require("../controllers/userController");
const { registerHospital, getHospitalProfile } = require("../controllers/hospitalController");
const hospitalAuthMiddleware = require("../middleware/hospitalAuthMiddleware");

// user Route
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/profile", authMiddleware, getProfile);

// Hospital Route
router.post("/register-hospital", registerHospital);
router.get("/hospital-profile", hospitalAuthMiddleware, getHospitalProfile );

// router.post("/image", upload.array("images", 2), uploadImage);

module.exports = router;