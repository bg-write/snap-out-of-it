const express = require("express");
const router = express.Router();
const affirmationsCtrl = require("../../controllers/api/affirmations");

// Public routes
router.get("/", affirmationsCtrl.index);

// Protected routes
router.use(require('../../config/auth'));
router.get("/:id", affirmationsCtrl.show);
router.post("/", affirmationsCtrl.create);
router.delete("/:id", affirmationsCtrl.delete);
router.put("/:id", affirmationsCtrl.update);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: "Not Authorized"});
};

module.exports = router;
