const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Categoria", CategoriaSchema);
