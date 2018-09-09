const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/client_id.json')
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy({
        clientID: keys.web.client_id,
        clientSecret: keys.web.client_secret,
        callbackURL: '/auth/google/callback'
    },
        (accessToken, refreshToken, profile, done) => {
            new User({ googleId: profile.id }).save();
        }
    )
);