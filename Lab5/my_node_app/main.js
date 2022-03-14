//const utils = require("./utils");

//"use strict";
const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./router"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");

router.get("/", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
}
);

router.get("/courses.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
    utils.getFile("views/courses.html", res);
}
);
router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
}
);

router.get("/glob.css", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.css);
    utils.getFile("public/css/glob.css", res);
}
);
router.get("/bootstrap.css", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
}
);
router.get("public/images/graph.png", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.png);
    utils.getFile("public/images/graph.png", res);
}
);
router.get("public/images/product.jpg", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.jpg);
    utils.getFile("public/images/product.jpg", res);
}
);
router.get("public/images/people.jpg", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.jpg);
    utils.getFile("public/images/people.jpg", res);
}
);
http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);

/*http.createServer(
    ("/", (req, res) => {
        res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
        res.end("Server is running");
    })

).listen(port)*/

console.log(`The server is listening on port number: ${port}`);