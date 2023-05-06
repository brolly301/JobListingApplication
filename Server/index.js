const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB not connected" + err));

app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//routes
const testRoutes = require("./routes/test");

app.use("/", testRoutes);

const port = 8080;
app.listen(port, () => console.log(`Running on Server ${port}`));
