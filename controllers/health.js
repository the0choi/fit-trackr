const Health = require("../models/health");

module.exports = {
  index,
  show,
  new: newHealth,
  create,
};

async function index(req, res) {
  const health = await Health.find({});
  res.render("health/index", { health });
}

async function show(req, res) {
  const healthOne = await Health.findById(req.params.id);
  res.render("health/show", { healthOne });
}

function newHealth(req, res) {
  res.render("health/new", { errorMsg: "" });
}

async function create(req, res) {
  try {
    const source = req.body.source;

    if (source === "fitbit") {
      console.log(req.user)
      // Check if the user is authenticated and has a valid access token
      if (!req.isAuthenticated() || !req.user.fitbitAccessToken) {
        return res
          .status(401)
          .json({ error: "User not authenticated or access token missing" });
      }

      const accessToken = req.user.fitbitAccessToken;
      const fitbitDate = req.body.date;
      console.log(fitbitDate)

      const response = await fetch(
        `https://api.fitbit.com/1/user/-/activities/date/${fitbitDate}.json`,
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

    } else if (source === "manual") {
      const health = await Health.create(req.body);
      console.log("New health record created:", health);
      res.redirect(`/dashboard`);
    } else {
      return res.status(400).send("Invalid form submission");
    }
  } catch (err) {
    console.log(err);
    res.render("health/new", { errorMsg: err.message });
  }
}
