const express = require("express");
const router = express.Router();
const meTimeCtrl = require("../../controllers/api/meTime");

// Public Routes
router.get("/", meTimeCtrl.index);

// Protected Routes
router.use(require('../../config/auth'));
router.get("/:id", meTimeCtrl.show);
router.post("/", meTimeCtrl.create);
router.delete("/:id", meTimeCtrl.delete);
router.put("/:id", meTimeCtrl.update);


function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;