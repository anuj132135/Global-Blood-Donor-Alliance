const mongoose = require("mongoose");

const hospitalSchema = mongoose.Schema(
  {
    hospitalName: {
      type: String,
      required: true,
      trim: true,
    },
    hospitalType: {
      type: String,
      enum: ["government", "private", "trust", "other"],
      required: true,
      trim: true,
    },
    regNumber: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    hostpitalEmail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    hospitalPhoneNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    hospitalEmergencyPhoneNo: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    pincode: {
      type: Number,
      maxlength: 6,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    adminName: {
      type: String,
      required: true,
      trim: true,
    },
    adminEmail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    adminPhone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    services: {
      type: [String],
      enum: [
        "24/7 Emergency",
        "Blood Transfusion",
        "Blood Bank",
        "ICU",
        "Ambulance",
        "Laboratory",
        "Surgery",
      ],
      default: [],
    },

    terms: {
      type: Boolean,
      required: true,
      default: false,
    },
    isVarified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
    },
    otpExpiry: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Hospital", hospitalSchema);
