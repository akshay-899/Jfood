var express = require('express');
const passport = require('passport');
const userModel = require('./users');

var router = express.Router();
const localStrategy = require('passport-local').Strategy;

passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function(req, res) {
  res.render('home'); // Render the home page with signup and login links
});
router.get('/about', function(req, res) {
  res.render('about'); // Render the home page with signup and login links
});
router.get('/restaurant',isLoggedIn,function(req, res) {
  res.render('restaurant'); // Render the home page with signup and login links
});
router.get('/testimonials', function(req, res) {
  res.render('testimonials'); // Render the home page with signup and login links
});

router.get('/signup', function(req, res) {
  res.render('signup');
  // console.log(req.body.password) // Render the signup form
});

router.get('/login', function(req, res) {
  res.render('login'); // Render the login form
});


router.post('/signup', function(req, res) {
  userModel.register(new userModel({ username: req.body.username, email: req.body.email }), req.body.password, (err, user) => {
    if (err) {
      console.error('Error registering user:', err);
      return res.render('signup'); // Render the register form again with an error message
    }
    passport.authenticate('local')(req, res, () => {
      res.redirect('/restaurant'); // Redirect to the profile page upon successful registration
    });
  });
  });
  router.post('/login', passport.authenticate('local', {
    successRedirect: "/restaurant",
    failureRedirect: '/signup',
    failureFlash: true
  }), function(req, res) {

    res.status(200).send("Login successful!");
  });
  


router.get("/logout", function(req, res,next){
  req.logout(function(err){
    if(err){return next(err);}
  res.redirect('/');
});
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
  res.locals.error = req.flash('error'); // Redirect to the login page if not authenticated
}

module.exports = router;
