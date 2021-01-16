const express = require("express");
const router = express.Router();
const affirmationsCtrl = require("../../controllers/api/affirmations");

// Public routes
router.get("/", affirmationsCtrl.index);

// Protected routes
router.use(require('../../config/auth'));
router.get("/:id", affirmationsCtrl.show);
