const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//CREANDO LA APP
const app = express();

//DATABASE
require("dotenv").config({path:"variables.env"})
console.log(process.env.DB_URL);

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.once("open", () => {
    console.log("Conectado a MongoDB");
});

//MIDLEWARE
app.use(express.json()); 
app.use(express.urlencoded());

//RUTAS
app.get("/", (req,res) => {
    res.send("Hola Mundo!")
})

const Apruebo =  require("./routes/Tinder_apruebo.js")
app.use("/api/tinder/apruebo", Apruebo)

const Rechazo =  require("./routes/Tinder_rechazo.js")
app.use("/api/tinder/rechazo", Rechazo)

const Match =  require("./routes/Tinder_match.js")
app.use("/api/tinder/match", Match)

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

//PARTIENDO EL SERVIDOR
app.listen(port, host, () => {console.log("El servidor esta funcionando")})