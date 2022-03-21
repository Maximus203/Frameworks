const express = require("express");

const app = express();

const homeController = require("./controllers/homeController");

const errorController = require("./controllers/errorController");

const layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);

app.set('view engine', 'ejs');

app.use(layouts);

app.use(express.static("public"));

app.get("/", homeController.showHome);

app.get("/courses", homeController.showCourses);

app.get("/contact", homeController.showSignUp);

app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);

app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});