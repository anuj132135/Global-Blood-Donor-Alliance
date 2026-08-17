const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
// const upload = require("../middleware/uploadMiddleware");
const  {registerUser, getProfile, loginUser, logout} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/profile", authMiddleware, getProfile);
// router.post("/image", upload.array("images", 2), uploadImage);

module.exports = router;