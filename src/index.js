const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
//Conexión a la base de datos
mongoose.connect(
  "mongodb+srv://PB:OlaTech@cluster0.mgq46sx.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Connected to MongoDB");
  }
);
//Este endpoint agrega y consulta las categorias existentes
const userRouter = require("./routes/Categorias");
app.use("/categorias", userRouter);

app.listen(3100);
