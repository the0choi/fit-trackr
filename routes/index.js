var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

router.get('/auth/fitbit',
  passport.authenticate('fitbit', { scope: ['activity','heartrate','location', 'nutrition', 'profile', 'sleep', 'weight'] }
));

router.get('/auth/fitbit/callback', passport.authenticate( 
  'fitbit', 
  { 
    successRedirect: '/',
    failureRedirect: '/'
}
));

// router.get('/dashboard', (req, res) => {
//   const accessToken = req.session.accessToken;
//   const refreshToken = req.session.refreshToken;

//   res.render('/health/show', { accessToken, refreshToken });
// });

router.get('/fitbit/profile', async (req, res) => {
  const accessToken = req.session.accessToken;

  res.json(profileData);
});

module.exports = router;
