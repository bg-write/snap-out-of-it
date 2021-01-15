const express = require("express");
const router = express.Router();
const mantrasCtrl = require("../../controllers/api/mantras");

/* GET /api/mantras */

router.get("/", mantrasCtrl.index);
router.get("/:id", mantrasCtrl.show);
router.post("/", mantrasCtrl.create);
router.delete("/:id", mantrasCtrl.delete);
router.put("/:id", mantrasCtrl.update);

module.exports = router;
