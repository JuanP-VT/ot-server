const express = require("express");
const router = express.Router();
const Categoria = require("../models/Categoria");

//Este endpoint agregará una nueva categoria a la base de datos
router.post("/", async (req, res) => {
  try {
    //Primero validamos que el nombre no esté ya en la base de datos
    const search = await Categoria.where("name").equals(req.body.name);
    if (search.length !== 0) {
      res.send({ res: "La categoria ya está en la base de datos" });
      return;
    }
    //Si el nombre esta disponible continuamos creando la nueva categoria
    // Formateamos a lowercase
    const categoriaName = req.body.name.toLowerCase();
    const newCategoria = new Categoria({ name: categoriaName });
    newCategoria.save();
    res.send({ res: "Categoria creada con éxito", categoria: newCategoria });
  } catch (error) {
    res.status(500).send({ res: error.message });
  }
});
// Este endpoint solicita toda las categorias guardadas en la base de datos
router.get("/", async (req, res) => {
  try {
    const search = await Categoria.where("name");
    res.send(search);
  } catch (error) {
    res.status(500).send({ res: error.message });
  }
});
module.exports = router;
