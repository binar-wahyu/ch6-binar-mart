const express = require("express");
const { Supplier } = require("../models");

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
  Supplier.findAll({
    order: [["name", "ASC"]],
  }).then((suppliers) => {
    res.render("pages/suppliers/index", {
      pageTitle: "Daftar Supplier",
      suppliers,
    });
  });
});

router.get("/suppliers/create", (req, res) => {
  res.render("pages/suppliers/create", { pageTitle: "Buat Supplier" });
});

router.post("/suppliers", (req, res) => {
  // Database tidak dapat menerima string kosong dalam memasukkan date
  // Jadi harus dilakukan pengecekan untuk konversi string kosong jadi null
  let joinDate;
  if (!req.body.joinDate) {
    joinDate = null;
  } else {
    joinDate = req.body.joinDate;
  }

  Supplier.create({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
    joinDate,
  }).then(() => {
    res.redirect("/suppliers");
  });
});

router.get("/suppliers/:id", (req, res) => {
  res.render("pages/suppliers/show", {
    pageTitle: "Supplier: PT. Mitra Utama",
  });
});

module.exports = router;
