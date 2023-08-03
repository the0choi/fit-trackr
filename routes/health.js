const express = require("express");
const router = express.Router();
const passport = require("passport");

const healthCtrl = require("../controllers/health");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/dashboard", ensureLoggedIn, healthCtrl.index);
router.get("/health/new", ensureLoggedIn, healthCtrl.new);
router.post("/dashboard", ensureLoggedIn, healthCtrl.create);
router.delete("/health/:id", ensureLoggedIn, healthCtrl.delete);
router.get("/health/:id", ensureLoggedIn, healthCtrl.show);
router.get("/health/:id/edit", ensureLoggedIn, healthCtrl.edit);
router.put("/health/:id", ensureLoggedIn, healthCtrl.update);

module.exports = router;
