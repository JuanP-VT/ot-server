const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
//Modelos de la base de datos
const Categoria = require("./models/Categoria");
//Conexión a la base de datos
mongoose.connect(
  "mongodb+srv://PB:OlaTech@cluster0.mgq46sx.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Connected to MongoDB");
  }
);
//Este endpoint agregará una nueva categoria a la base de datos
app.post("/addcategoria", async (req, res) => {
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
    res.send(newCategoria);
  } catch {
    res.status(500).send();
  }
});

app.listen(3000);
