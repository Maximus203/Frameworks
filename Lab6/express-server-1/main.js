const http = require('http');
const express = require('express');
const logger = require('morgan');
const port = 3000;

const app = express();


app.use(logger("dev"));

app.use((req, res) => {
    res.end("Hello World !");
});


/*app.use((req, res, next) => {
    console.log("In come a" + req.method + " to: " + req.url);
    next();
});

/*app.use((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.send("Hello World !");
});

/*app.use((req, res) => {
    console.log("In come a request to: " + req.url);
    res.send("Hello World !");
});*/

http.createServer(app).listen(port);