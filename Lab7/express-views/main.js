const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.use((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h3>Fichier non trouve !</h3>");
});

http.createServer(app).listen(3300);


