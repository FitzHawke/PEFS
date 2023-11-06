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
			User.findOne({ email })
				.then((user) => {
					if (!user) {
						return done(null, false, { message: `Email ${email} not found.` });
					}

					return bcrypt.compare(password, user.password, (_err, result) => {
						if (!result) {
							return done(null, false, { message: "Incorrect password." });
						}
						return done(null, user);
					});
				})
				.catch((err) => done(err));
		},
	),
);

passport.use(
	new JwtStrategy(options, (jwtPayload, done) => {
		User.findById(jwtPayload.id)
			.then((user) => {
				if (!user) {
					return done(null, false);
				}

				return done(null, user);
			})
			.catch((err) => done(err, false));
	}),
);
