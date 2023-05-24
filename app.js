const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const { errorHandler } = require("./helpers/apiHelpers");
const { categoriesRouter, userRouter } = require("./routes/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api/categories", categoriesRouter);
app.use("/api/user", userRouter);

app.use(errorHandler);

module.exports = app;
