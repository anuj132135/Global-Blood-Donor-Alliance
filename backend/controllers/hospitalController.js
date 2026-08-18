const Hospital = require("../models/Hospital");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const sendEmail = require("../utils/sendEmail");

const registerHospital = async (req, res) => {
  try {
    const {
      hospitalName,
      hospitalType,
      regNumber,
      hostpitalEmail,
      hospitalPhoneNo,
      hospitalEmergencyPhoneNo,
      country,
      city,
      state,
      pincode,
      address,
      adminName,
      adminEmail,
      adminPhone,
      password,
      Cpassword,
      services,
      terms
    } = req.body;

    const emailExist = await Hospital.findOne({ hostpitalEmail });
    const mobileExist = await Hospital.findOne({ hospitalPhoneNo });

    if (emailExist) {
      return res.status(500).json({
        message: "Email already exists",
      });
    }
    if (mobileExist) {
      return res.status(500).json({
        message: "Mobile No. already exists",
      });
    }

    if (password !== Cpassword) {
      return res.status(500).json({
        message: "Password doesn't match",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const register = await Hospital.create({
      hospitalName,
      hospitalType,
      regNumber,
      hostpitalEmail,
      hospitalPhoneNo,
      hospitalEmergencyPhoneNo,
      country,
      city,
      state,
      pincode,
      address,
      adminName,
      adminEmail,
      adminPhone,
      password : hashPassword,
      services,
      terms,
      otp,
      otpExpiry: Date.now() + 10 * 60 * 1000,
    });

    //     await sendEmail(
    //     email,
    //     "Email Varificaton",
    //     "your OTP is"+otp
    // )

    const generateToken = jwt.sign(
      {
        id: register._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", generateToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "Hospital registered successfully!",
    })
    
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const verify = await bcrypt.compare(password, user.password)

    if(!verify){
        return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const generateToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", generateToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      // user: user,
      // token: generateToken,
      message: "You are loggedin successfully!",
    })
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getHospitalProfile = async (req, res) => {
  res.json({
    success: true,
    hospital: req.hospital,
  });
};

const logout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.json({
    message: "Logout successful",
  });
};

// const uploadImage = async (req, res) => {
//   res.status(200).json({
//     success: true,
//     file: req.file,
//   });
// };
// const register = async (req, res) => {
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   await User.create({
//     name,
//     email,
//     password: hashedPassword,
//     otp,
//     otpExpiry: Date.now() + 10 * 60 * 1000,
//   });

//   await sendEmail(
//     email,
//     "Email Varificaton",
//     "your OTP is"+otp
//   )
// };

// module.exports = { registerUser, loginUser, getProfile, uploadImage };
module.exports = { registerHospital, getHospitalProfile , loginUser, logout};
