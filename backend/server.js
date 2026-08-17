const express = require("express");
const connectDB = require("./config/database");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
connectDB();

app.listen(PORT, () => {
    console.log("Server is Running...", PORT);
})
