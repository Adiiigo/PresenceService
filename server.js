const express = require("express") ;
const bodyparser = require("body-parser");
const InitiateMongoServer = require("./config/db");

InitiateMongoServer();

const app = express() ;

const PORT = process.env.PORT || 4000 ;

app.use(bodyparser.json());

app.get("/" , (req, res) => {
    res.json({message: "API Working"})
}) ;

app.listen(PORT, (req, res) => {
    console.log('Server Started at PORT `($PORT)`') ;
}) ;

