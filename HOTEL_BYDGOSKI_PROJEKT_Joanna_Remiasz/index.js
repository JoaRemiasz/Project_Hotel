const express = require("express");
const db = require("./routes/db-config");
const nodemailer = require("nodemailer");
const app = express();
const cookie = require("cookie-parser");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
app.use("/js", express.static(__dirname + "/public/js"))
app.use("/css", express.static(__dirname + "/public/css"))
app.use("/html", express.static(__dirname + "/public/html"))
app.use("/foto", express.static(__dirname + "/foto"))
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookie());
app.use(express.json());
db.connect((err) => {
    if(err) throw err; 
})

app.use("/", require("./routes/pages"));
app.use("/api", require("./controller/auth"));
app.listen(PORT);
