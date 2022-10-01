const mongoose = require("mongoose");

const ProductScheme = new mongoose.Schema({
  name: String,
  categoria: String,
  unidadesDisponibles: Number,
  precio: Number,
});

module.exports = mongoose.model("Product", ProductScheme);
