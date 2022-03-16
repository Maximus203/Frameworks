const http = require('http');
const express = require('express');
//const path = require('path');
//const port = 3000;

const app = express();
app.get("/", (req, res) => {
    res.end("Welcome to my homepage !");
});

app.get("/about", (req, res) => {
    res.end("Welcome to the about page !");
});

app.get("/hello/:who", (req, res) => {
    res.end("Hello, " + req.params.who + ".");
});

app.use("/", (req, res) => {
    res.statusCode = 404;
    res.end("404 !");
});


http.createServer(app).listen(3000);