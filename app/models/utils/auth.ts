import express = require('express');
import passport = require('passport');
import LocalStrategy = require('passport-local').Strategy;
import User = require('../models/user');

const app = express();

// Initialize Passport
passport.use(new LocalStrategy(User.authenticate()));

// Define routes
app.get('/auth/login', (req, res) => {
  res.render('login', {
    title: 'Login',
    message: req.flash('error')
  });
});

app.post('/auth/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: true
}));

app.get('/auth/register', (req, res) => {
  res.render('register', {
    title: 'Register',
    message: req.flash('error')
  });
});

app.post('/auth/register', (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if (existingUser) {
      req.flash('error', 'Email already registered');
      res.redirect('/auth/register');
    } else {
      user.save((err) => {
        if (err) {
          req.flash('error', err.message);
          res.redirect('/auth/register');
        } else {
          passport.authenticate('local')(req, res, () => {
            res. redirect('/');
          });
        }
      });
    }
  });
});

export default app;
