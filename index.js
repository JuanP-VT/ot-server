const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Conexión a la base de datos
mongoose.connect(
  "mongodb+srv://PB:OlaTech@cluster0.mgq46sx.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Connected to MongoDB");
  }
);

app.listen(3000);
