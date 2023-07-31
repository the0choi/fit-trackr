const express = require("express");
const router = express.Router();
const passport = require("passport");

const healthCtrl = require("../controllers/health");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/dashboard", ensureLoggedIn, healthCtrl.index);
router.get("/health/new", ensureLoggedIn, healthCtrl.new);
router.post("/dashboard", ensureLoggedIn, healthCtrl.create);
router.get("/health/:id", ensureLoggedIn, healthCtrl.show);

module.exports = router;
