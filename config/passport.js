const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FitbitStrategy = require("passport-fitbit-oauth2").FitbitOAuth2Strategy;
const User = require("../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) return cb(null, user);
        user = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
        });
        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(async function (userId, cb) {
  cb(null, await User.findById(userId));
});

passport.use(
  new FitbitStrategy(
    {
      clientID: process.env.FITBIT_CLIENT_ID,
      clientSecret: process.env.FITBIT_CLIENT_SECRET,
      callbackURL: process.env.FITBIT_CALLBACK,
      passReqToCallback: true,
    },
    async function (req, accessToken, refreshToken, profile, cb) {
      try {
        let user = await User.findOne({ googleId: req.user.googleId });
        if (user.fitbitId !== undefined) return cb(null, user);
        user.fitbitId = profile.id;
        user.accessToken = accessToken;
        console.log(user.fitbitId);
        // user.refreshToken = refreshToken;
        await user.save();
        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);
