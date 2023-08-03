const express = require('express');
const router = express.Router();
const passport = require("passport");

const notesCtrl = require('../controllers/notes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/health/:id/notes', ensureLoggedIn,notesCtrl.create);
router.delete('/health/:id/notes', ensureLoggedIn, notesCtrl.delete);

module.exports = router;