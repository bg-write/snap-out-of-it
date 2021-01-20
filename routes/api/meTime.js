const express = require("express");
const router = express.Router();
const meTimeCtrl = require("../../controllers/api/meTime");

// Public Routes

// Protected Routes
router.use(require("../../config/auth"));
router.get("/", meTimeCtrl.index);
router.get("/:id", checkAuth, meTimeCtrl.show);
router.post("/", checkAuth, meTimeCtrl.create);
router.delete("/:id", checkAuth, meTimeCtrl.delete);
router.put("/:id", checkAuth, meTimeCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
