var express = require('express');
const passport = require('passport');
const userModel = require('./users');

var router = express.Router();
const localStrategy = require('passport-local');

passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function(req, res) {
  res.render('home'); 
});
router.get('/about', function(req, res) {
  res.render('about');
});
router.get('/restaurant',isLoggedIn,function(req, res) {
  res.render('restaurant');
});
router.get('/testimonials', function(req, res) {
  res.render('testimonials'); 
});

router.get('/signup', function(req, res) {
  res.render('signup');
});

router.get('/login', function(req, res) {
  res.render('login');
});

//payment route
router.post('/processPayment', (req, res) => {
  const { cardNumber, expiryDate, cvv, cardHolder } = req.body;
  if (!cardNumber || !expiryDate || !cvv || !cardHolder) {
      res.status(400).send('Please fill in all fields.');
  } else {
      res.redirect('/thankyou');
  }
});

router.get('/thankyou', (req, res) => {
  res.render('thankyou'); 
});
router.get('/payment', (req, res) => {
  res.render('payment'); 
});


router.post('/signup', function(req, res) {
  const userData=new userModel({
     username: req.body.username,
      email: req.body.email,
      number:req.body.number
    });
    userModel.register(userData,req.body.password).then(function(){
    passport.authenticate('local')(req, res, () => {
      res.redirect('/restaurant');
    })
  })
  });
  router.post('/login', passport.authenticate("local" , {
    successRedirect: '/restaurant',
    failureRedirect: '/signup'
  }));
  
  


router.get("/logout", function(req, res,next){
  req.logout(function(err){
    if(err){return next(err);}
  res.redirect('/');
});
});

//middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
