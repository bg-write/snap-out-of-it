const express = require("express");
const router = express.Router();
const playlistsCtrl = require("../../controllers/api/playlists");

// Public routes
router.get("/", playlistsCtrl.index);
