const express = require("express");

const app = express();

const homeController = require("./controllers/homeController");
const actorController = require("./controllers/actorController");
const fansController = require("./controllers/fansController");
const errorController = require("./controllers/errorController");
const layouts = require("express-ejs-layouts");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/looney_tunes", () => {
    console.log(`Successfully connected to the database looney tunes`);
}, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose !");
})


app.set("port", process.nextTick.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(layouts);

app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

app.get("/", homeController.index);

app.get("/fans", fansController.getAllFans, (req, res, next) => {
    res.render("fans", { fans: req.data });
});
app.get("/actor", actorController.getAllActors, (req, res, next) => {
    res.render("actor", { actor: req.data });
});

app.get("/contact", fansController.getFanPage);
app.post("/contact", fansController.saveFan);

app.use(errorController.logErrors);
app.use(errorController.respondInternalError);
app.use(errorController.respondNoRessourceFound);

app.listen(app.get("port"), () => {
    console.log(`Server is running at http://localhost:${app.get("port")}`);
})