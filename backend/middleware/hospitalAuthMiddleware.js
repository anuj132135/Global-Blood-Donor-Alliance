const jwt = require("jsonwebtoken");
const Hospital = require("../models/Hospital");

const hospitalAuthMiddleware = async (req, res, next) => {

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not Authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const hospital = await Hospital.findById(decoded.id).select("-password");

     if (!hospital) {
      return res.status(401).json({
        message: "Hospital not found",
      });
    }

    req.hospital = hospital;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }

}

module.exports = hospitalAuthMiddleware;
