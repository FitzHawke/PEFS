/* eslint-disable no-unused-vars */
const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const passport = require("passport");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

require("./config/passport");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

app.use(passport.initialize());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/rides", require("./routes/rideRoutes"));
app.use("/api/runs", require("./routes/runRoutes"));
app.use("/api/workouts", require("./routes/workoutRoutes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "dist", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`server started on port ${port}`));
