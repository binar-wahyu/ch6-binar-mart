const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home/index");
});

router.get("/products", (req, res) => {
  res.render("pages/products/index", { pageTitle: "Daftar Barang" });
});

router.get("/products/create", (req, res) => {
  res.render("pages/products/create", { pageTitle: "Buat Barang" });
});

router.get("/products/:id", (req, res) => {
  res.render("pages/products/show", { pageTitle: "Barang: Masker Medis" });
});

router.get("/suppliers", (req, res) => {
  res.render("pages/suppliers/index", { pageTitle: "Daftar Supplier" });
});

router.get("/suppliers/create", (req, res) => {
  res.render("pages/suppliers/create", { pageTitle: "Buat Supplier" });
});

router.get("/suppliers/:id", (req, res) => {
  res.render("pages/suppliers/show", {
    pageTitle: "Supplier: PT. Mitra Utama",
  });
});

module.exports = router;
