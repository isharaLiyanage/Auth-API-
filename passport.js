const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");

const User = require("./models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "339430174552-aimfs6tft17pflnvm2e10272d7ll90il.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/api/google/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
