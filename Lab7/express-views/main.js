const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

//const publicPath = path.resolve(__dirname, 'public');
//app.use(express.static(publicPath));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

/*app.use((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h3>Fichier non trouve !</h3>");
});*/

app.get("/", (req, res) => {
    res.render("index", {
        message: "Hey everyone! This is my webpage.",
    });
});

http.createServer(app).listen(3000);


