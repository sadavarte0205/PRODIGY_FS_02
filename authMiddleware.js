const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).json({ msg: "Access denied" });

  try {
    jwt.verify(token, "secretkey");
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};
