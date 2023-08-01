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
  passport.authenticate('fitbit', { scope: ['activity','heartrate', 'nutrition', 'profile', 'sleep', 'weight'] }
));

router.get('/fitbitoauth2callback', passport.authenticate( 
  'fitbit', 
  { 
    successRedirect: '/',
    failureRedirect: '/'
}
));

module.exports = router;
