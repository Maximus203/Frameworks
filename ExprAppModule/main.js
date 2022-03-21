const express = require("express");

const app = express();

const homeController = require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);

app.set('view engine', 'ejs');

app.use(layouts);

app.get("/", homeController.showHome);

app.get("/courses", homeController.showCourses);

app.get("/contact", homeController.showSignUp)

app.post("/contact", homeController.postedSignUpForm)

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});