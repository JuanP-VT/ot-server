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
app.use('/',(req, res)=>{
  res.send({res:'hello'})
})
//Este endpoint agrega y consulta las categorias existentes
const categoriaRouter = require("./routes/Categorias");
app.use("/categorias", categoriaRouter);

//Este endpoint agrega y consulta los productos existentes
const productRouter = require("./routes/Products");
app.use("/products", productRouter);
app.listen(process.env.PORT || 5000)
