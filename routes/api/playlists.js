const express = require("express");
const router = express.Router();
const playlistsCtrl = require("../../controllers/api/playlists");

// Public routes
router.get("/", playlistsCtrl.index);

// Protected routes
router.use(require("../../config/auth"));
router.get("/:id", playlistsCtrl.show);
router.post("/", playlistsCtrl.create);

