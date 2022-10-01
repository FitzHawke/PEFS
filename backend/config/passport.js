const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const User = require("../models/userModel");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      // eslint-disable-next-line consistent-return
      User.findOne({ email }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false, { message: `Email ${email} not found.` });
        }

        bcrypt.compare(password, user.password, (_err, result) => {
          if (!result) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, user);
        });
      });
    }
  )
);

passport.use(
  new JwtStrategy(options, (jwtPayload, done) => {
    User.findById(jwtPayload.id, (err, user) => {
      if (err) {
        return done(err, false);
      }

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    });
  })
);
