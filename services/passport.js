const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/client_id.json')

passport.use(
    new GoogleStrategy({
        clientID: keys.web.client_id,
        clientSecret: keys.web.client_secret,
        callbackURL: '/auth/google/callback'
    },
        (accessToken, refreshToken, profile, done) => {
            console.log(`access token ${accessToken}`);
            console.log(`refresh token ${refreshToken}`);
            console.log('profile', profile);
            console.log('hello');
        }
    )
);