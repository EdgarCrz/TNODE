const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");


const app = express();

dbConnection();

app.use(cors());

app.use(express.json());

app.use(("/api/inicio"), require("./routes/inicio.routes"));

app.listen(process.env.PORT, ()=>{
    console.log(`listo por el puerto ${process.env.PORT}`); 
})