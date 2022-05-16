const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const router = require("./router");

const PORT = 3000;

const app = express();

// Accepting Input
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static files
app.use(express.static("public"));

// Set Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/app");
app.set("view engine", "ejs");

// Middleware to pass `url` to locals variable so we can use it on view
app.use((req, res, next) => {
  res.locals.url = req.originalUrl;
  next();
});

// Router
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
