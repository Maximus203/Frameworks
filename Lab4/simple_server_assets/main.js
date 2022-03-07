const port = 3000;
const http = require("http");
const fs = require("fs");
const getViewUrl = url => {
    return `views${url}.html`;
};

const app = http.createServer((req, res) => {
    console.log(`Received an incoming request from ${req.url}`);
    let viewUrl = getViewUrl(req.url);
    fs.readFile(viewUrl, (error, data) => {
        s
        if (error) {
            res.writeHead(404);
            res.write("<h1>404 FILE NOT FOUND</h1>");
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
        }
        res.end();
    });
});

app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}/`)
);