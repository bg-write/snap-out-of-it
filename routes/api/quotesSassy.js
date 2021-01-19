const express = require("express");
const router = express.Router();
const quotesSassyCtrl = require("../../controllers/api/quotesSassy");

// Public Routes
router.get("/", quotesSassyCtrl.index);

// Protected Routes
router.use(require('../../config/auth'));
router.get("/:id", checkAuth, quotesSassyCtrl.show);


function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({msg: 'Not Authorized'});
}
