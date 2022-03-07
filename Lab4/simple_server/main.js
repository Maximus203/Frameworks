const port = 3000;
const http = require('http');

const app = http.createServer((req, res) => {
    console.log(`Received an incoming request from ${req.url}`);
    res.writeHead(200, { "Content-Type": "text/hmtl" });

    let resMessage = "<h1>Hello, ESTM!</h1>";
    res.write(resMessage);
    res.end();
    console.log(`Sent a response: ${resMessage}`);
});

app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}/`)
);