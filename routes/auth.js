const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/auth");

/*---------- Public Routes ----------*/
router.post("/signup", authCtrl.signup);
router.post("/login", authCtrl.login);

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
