const router = require("express").Router();
const { authMiddleware } = require("../middleware/auth.middleware");

router.get("/", authMiddleware, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

module.exports = router;
