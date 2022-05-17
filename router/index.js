const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/products/index");
});

router.get("/suppliers", (req, res) => {
  res.render("pages/suppliers/index");
});

module.exports = router;
