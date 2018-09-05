var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/public'));
const fs = require('fs');
app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.post('/message', function (req, res) {
    let body = req.body;
    fs.appendFile(`${process.env.PWD}/messages.txt`, `${body.name} contacted you from ${body.email} with the subject ${body.subject} and say ${body.msj}\n`, err => {
        console.log(err);
    });
});

app.listen(3000);

console.log("Running at Port 3000");