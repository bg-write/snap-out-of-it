const express = require("express");
const router = express.Router();
const affirmationsCtrl = require("../../controllers/api/affirmations");

// Public routes

// Protected routes
router.use(require("../../config/auth"));
router.get("/", affirmationsCtrl.index);
router.get("/:id", checkAuth, affirmationsCtrl.show);
router.post("/", checkAuth, affirmationsCtrl.create);
router.delete("/:id", checkAuth, affirmationsCtrl.delete);
router.put("/:id", checkAuth, affirmationsCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
