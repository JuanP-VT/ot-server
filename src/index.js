const express = require("express");
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const app = express();
//Cors
const cors = require('cors')
app.use(cors({
  origin:"*"
}))
app.use(express.json());
//Conexión a la base de datos
mongoose.connect(
  uri||"mongodb+srv://PB:OlaTech@cluster0.mgq46sx.mongodb.net/?retryWrites=true&w=majority",
);

//Este endpoint agrega y consulta las categorias existentes
const categoriaRouter = require("./routes/Categorias");
app.use("/categorias", categoriaRouter);

//Este endpoint agrega y consulta los productos existentes
const productRouter = require("./routes/Products");
app.use("/products", productRouter);
app.listen(process.env.PORT || 5000)
