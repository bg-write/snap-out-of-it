const express = require("express");
const router = express.Router();
const mantrasCtrl = require("../../controllers/api/mantras");

// Public Routes
router.get("/", mantrasCtrl.index);

// Protected Routes
router.use(require("../../config/auth"));
router.get("/", mantrasCtrl.index);
router.get("/:id", checkAuth, mantrasCtrl.show);
router.post("/", checkAuth, mantrasCtrl.create);
router.delete("/:id", checkAuth, mantrasCtrl.delete);
router.put("/:id", checkAuth, mantrasCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
