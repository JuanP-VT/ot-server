const express = require("express");
const router = express.Router();
const Products = require("../models/ProductModel");

//Este endpoint agregará un nuevo producto a la base de datos
router.post("/", async (req, res) => {
  try {
    //Primero validamos que el nombre no esté ya en la base de datos
    const search = await Products.where("name").equals(req.body.name);
    if (search.length !== 0) {
      res.send({ res: "El producto ya está en la base de datos" });
      return;
    }
    //Si el nombre esta disponible continuamos creando la nueva categoria
    // Formateamos a lowercase
    const productName = req.body.name.toLowerCase();
    const categoria = req.body.categoria.toLowerCase();
    const unidades = req.body.unidadesDisponibles;
    const precio = req.body.precio;
    const newProduct = new Products({
      name: productName,
      categoria: categoria,
      unidadesDisponibles: unidades,
      precio: precio,
    });
    newProduct.save();
    res.send({ res: "producto agregado con éxito", producto: newProduct });
  } catch (error) {
    res.status(500).send({ res: error.message });
  }
});
// Este endpoint solicita todos los productos guardados en la base de datos
router.get("/", async (req, res) => {
  try {
    const search = await Products.where("name");
    res.send(search);
  } catch (error) {
    res.status(500).send({ res: error.message });
  }
});

// Este endpoint solicita todos los productos por categoria
router.post("/search", async (req, res) => {
  try {
    const search = await Products.where("categoria").equals(req.body.categoria);
    res.send(search);
  } catch (error) {
    res.status(500).send({ res: error.message });
  }
});
module.exports = router;
