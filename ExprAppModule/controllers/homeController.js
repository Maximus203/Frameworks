const courses = [
    {
        title: "Advanced JS",
        cost: 50,
    },
    {
        title: "ReactJS",
        cost: 25,
    },
    {
        title: "NodeJS",
        cost: 50,
    },
    {
        title: "ExpressJS",
        cost: 25,
    },
];

exports.showHome = (req, res) => {
    res.render("index");
};
exports.showCourses = (req, res) => {
    res.render("courses", { offredcourses: courses });
};
exports.showCourses = (req, res) => {
    res.render("contact");
};
exports.showCourses = (req, res) => {
    res.render("error");
};
exports.showCourses = (req, res) => {
    res.render("thanks");
};