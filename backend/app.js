const express = require("express");
const userRoutes = require("./routers/userRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();

app.use(cors({
    origin: process.env.FRONTEND, 
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
// app.use("/uploads", express.static("uploads"));
app.use("/auth/api", userRoutes);
// app.use("/", (req, res) => {
//   res.send("this is running");
// });
module.exports = app;