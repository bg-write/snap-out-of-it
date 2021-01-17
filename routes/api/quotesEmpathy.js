const express = require("express");
const router = express.Router();
const quotesEmpathyCtrl = require("../../controllers/api/quotesEmpathy");

// Public Routes
router.get("/", quotesEmpathyCtrl.index);

// Protected Routes
router.use(require('../../config/auth'));
router.get("/:id", quotesEmpathyCtrl.show);


function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({msg: 'Not Authorized'});
};
