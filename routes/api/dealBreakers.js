const express = require("express");
const router = express.Router();
const dealBreakersCtrl = require("../../controllers/api/dealBreakers");

// Public Routes
router.get("/", dealBreakersCtrl.index);

// Protected Routes
router.use(require('../../config/auth'));
router.get("/:id", checkAuth, dealBreakersCtrl.show);
router.post("/", checkAuth, dealBreakersCtrl.create);
router.delete("/:id", checkAuth, dealBreakersCtrl.delete);
router.put("/:id", checkAuth, dealBreakersCtrl.update);


function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;