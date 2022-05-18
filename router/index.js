const express = require("express");
const { Supplier } = require("../models");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home/index");
});

/** START PRODUCTS ROUTE */

router.get("/products", (req, res) => {
  res.render("pages/products/index", { pageTitle: "Daftar Barang" });
});

router.get("/products/create", (req, res) => {
  res.render("pages/products/create", { pageTitle: "Buat Barang" });
});

router.get("/products/:id", (req, res) => {
  res.render("pages/products/show", { pageTitle: "Barang: Masker Medis" });
});

/** END PRODUCTS ROUTE */

/** START SUPPLIERS ROUTE */

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
  Supplier.findOne({ where: { id: req.params.id } }).then((supplier) => {
    res.render("pages/suppliers/show", {
      pageTitle: `Supplier: ${supplier.name}`,
      supplier,
    });
  });
});

router.get("/suppliers/:id/edit", (req, res) => {
  Supplier.findOne({ where: { id: req.params.id } }).then((supplier) => {
    res.render("pages/suppliers/edit", {
      pageTitle: "Edit Supplier",
      supplier,
    });
  });
});

router.put("/suppliers/:id", (req, res) => {
  let joinDate;
  if (!req.body.joinDate) {
    joinDate = null;
  } else {
    joinDate = req.body.joinDate;
  }

  Supplier.update(
    {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      address: req.body.address,
      joinDate,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(() => {
    res.redirect("back");
  });
});

router.delete("/suppliers/:id", (req, res) => {
  Supplier.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.redirect("back");
  });
});

/** END SUPPLIERS ROUTE */

module.exports = router;
