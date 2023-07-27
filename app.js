const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const { errorHandler } = require("./helpers/apiHelpers");
const { categoriesRouter, userRouter } = require("./routes/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use((req, res, next) => {
//   if (
//     req.url === "/.well-known/apple-developer-merchantid-domain-association"
//   ) {
//     res.sendFile(
//       path.join(
//         __dirname,
//         "public",
//         ".well-known",
//         "apple-developer-merchantid-domain-association.txt"
//       )
//     );
//   } else {
//     next();
//   }
// });

// app.use(express.static(path.join(__dirname, "public")));

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/categories", categoriesRouter);
app.use("/api/user", userRouter);

app.use(errorHandler);

module.exports = app;
