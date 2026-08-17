const mongoose = require("mongoose");

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected Successfully...")
    }catch(err){
        console.log(err.message);
    }
}

module.exports = connectDB;