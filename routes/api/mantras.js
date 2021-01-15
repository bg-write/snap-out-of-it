const express = require("express");
const router = express.Router();
const mantrasCtrl = require("../../controllers/api/mantras");

// Public Routes
router.get("/", mantrasCtrl.index);

// Protected Routes
router.use(require('../../config/auth'));
router.get("/:id", mantrasCtrl.show);
router.post("/", mantrasCtrl.create);
router.delete("/:id", mantrasCtrl.delete);
router.put("/:id", mantrasCtrl.update);


function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
