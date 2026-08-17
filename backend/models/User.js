const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    mobile : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    gender : {
        type : String,
        required : true,
        enum : ['male', 'female', 'other'],
        trim : true
    },
    dateOfBirth : {
        type : Date,
        required : true,
        trim : true
    },
    bloodGroup : {
        type : String,
        enum : ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-','O+', 'O-'],
        required : true,
        trim : true
    },
    weight : {
        type : Number,
        required : true,
        trim : true
    },
    lastDonation : {
        type : Date,
        trim : true
    },
    city : {
        type : String,
        required : true,
        trim : true
    },
    state : {
        type : String,
        required : true,
        trim : true
    },
    pincode : {
        type : Number,
        maxlength: 6,
        required : true,
        trim : true
    },
    address : {
        type : String,
        required : true,
        trim : true
    },
    terms : {
        type : Boolean,
        required : true,
        default : false
    },
    isVarified : {
        type : Boolean,
        default : false
    },
    otp : {
        type: String
    },
    otpExpiry : {
        type : Date
    }
},{
    timestamps : true
});

module.exports = mongoose.model("User", userSchema);