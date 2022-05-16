const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/products/index");
});

router.get("/supplier", (req, res) => {
  res.render("pages/suppliers/index");
});

module.exports = router;
