const express = require("express");
const router = express.Router();
const dealBreakersCtrl = require("../../controllers/api/dealBreakers");

// Public Routes
router.get("/", dealBreakersCtrl.index);

// Protected Routes
router.use(require('../../config/auth'));
router.get("/:id", dealBreakersCtrl.show);
router.post("/", dealBreakersCtrl.create);
router.delete("/:id", dealBreakersCtrl.delete);
router.put("/:id", dealBreakersCtrl.update);


function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;