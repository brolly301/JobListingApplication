const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

const app = express();

//DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB not connected" + err));

//middlewares
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressValidator());

//route imports
const testRoutes = require("./routes/test");
const userRoutes = require("./routes/user");

//routes
app.use("/", testRoutes);
app.use("/register", userRoutes);

//port and listener
const port = 8080;
app.listen(port, () => console.log(`Running on Server ${port}`));
