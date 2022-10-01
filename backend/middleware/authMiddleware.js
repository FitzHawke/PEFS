const passport = require("passport");

module.exports = {
  protect(req, res, next) {
    passport.authenticate("jwt", { session: false, failureRedirect: "/login" })(
      req,
      res,
      next
    );
  },
};
