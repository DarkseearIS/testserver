const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const fs = require('fs');


/*
app.use(cors());

mongoose.connect("mongodb://localhost/users-db",
    {useNewUrlParser:true, useUnifiedTopology:true});

app.use(bodyParser.json());
app.use("/", require("./api"));

app.listen(80, "192.168.1.51" );*/

let key = fs.readFileSync('encription/private.key');
let cert = fs.readFileSync('encription/certificate.crt');
let ca = fs.readFileSync('encription/ca_bundle.crt');
let options = {
    key: key,
    cert: cert,
    ca: ca
};
const https = require('https');
const http = require('http');
app.use(cors());

mongoose.connect("mongodb://localhost/users-db",
    {useNewUrlParser:true, useUnifiedTopology:true});

app.use(bodyParser.json());
app.use("/api", require("./api"));


http.createServer(app).listen(80, "192.168.1.51");
// начинаем прослушивать подключения на 3200 порту
https.createServer(options,app).listen(3200,"192.168.1.51");