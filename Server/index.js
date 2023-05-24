//packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const passport = require("passport");
const LocalAuth = require("passport-local");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoSanitize = require("express-mongo-sanitize");
const app = express();

//models
const User = require("./models/user");

//DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB not connected" + err));

//session store
const sessionOptions = {
  secret: "Test",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 2,
    maxAge: 120 * 60 * 1000,
  },
};
app.use(session(sessionOptions));

//passport registeration middleware -
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalAuth(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

//middlewares
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(express.json());

//route imports
const testRoutes = require("./routes/test");
const userRoutes = require("./routes/authentication.js");
const profileRoutes = require("./routes/profile.js");

//routes
app.use("/", userRoutes);
app.use("/profile", profileRoutes);

//port and listener
const port = 8080;
app.listen(port, () => console.log(`Running on Server ${port}`));
