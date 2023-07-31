const express = require("express");
const router = express.Router();
const passport = require("passport");

const healthCtrl = require("../controllers/health");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/dashboard", ensureLoggedIn, healthCtrl.index);
router.get("/health/new", ensureLoggedIn, healthCtrl.new);
router.post("/dashboard", ensureLoggedIn, healthCtrl.create);
router.get("/health/:id", ensureLoggedIn, healthCtrl.show);

router.get("/activities", async (req, res, next) => {
  try {
    // Check if the user is authenticated and has a valid access token
    if (!req.isAuthenticated() || !req.user.fitbitAccessToken) {
      return res
        .status(401)
        .json({ error: "User not authenticated or access token missing" });
    }

    const accessToken = req.user.fitbitAccessToken;

    // Make API request to Fitbit API to get activities data
    const response = await fetch(
      "https://api.fitbit.com/1/user/-/activities.json",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching activities data from Fitbit API");
    }

    const activitiesData = await response.json();
    res.json(activitiesData);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
