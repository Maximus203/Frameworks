const http = require('http');
const express = require('express');

const app = express();
app.use((req, res) => {
    console.log("In come a request to: " + req.url);
    res.send("Hello World !");
});

http.createServer(app).listen(3000);