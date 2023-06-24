const express = require("express");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");
const loggedIn = require("../controller/loggedIn")
const logout = require("../controller/logout");
const admin = require("../controller/admin");
const update_status = require("../controller/update_status");
const zarezerwowane = require("../controller/zerezerwowane");
const opinie = require("../controller/opinie");
const addOpinia = require("../controller/addOpinia");
const profile = require("../controller/profile");
const adminOpinie = require("../controller/adminOpinie");
const delete_opinion = require("../controller/delete_opinion");
const { rezerwacja, sprawdzDostepnoscTerminu } = require("../controller/rezerwacja");
const add_rezerwacja = require("../controller/add_rezerwacja");


const router = express.Router();

router.get("/", loggedIn, (req, res) => {
    if(req.user) {
        res.render("index", {status: "loggedIn", user: req.user});
    }else{
        res.render("index", {status: "no", user: "nothing"});
    }
})
router.get("/register", (req, res) => {
    res.sendFile("register.html", { root: "./public" });
})
router.get("/login", (req, res) => {
    res.sendFile("login.html", { root: "./public/" });
})
router.get("/cennik", (req, res) => {
    res.sendFile("cennik.html", { root: "./public/" });
})
router.get("/pokoje", (req, res) => {
    res.sendFile("pokoje.html", { root: "./public/" });
})
router.get("/addOpinia", (req, res) => {
    res.sendFile("addOpinia.html", { root: "./public/" });
})

router.get("/udana_rezerwacja", (req, res) => {
    res.sendFile("udana_rezerwacja.html", { root: "./public/" });
})

router.get("/restauracja", (req, res) => {
    res.sendFile("restauracja.html", { root: "./public/" });
})

router.get("/spa", (req, res) => {
    res.sendFile("spa.html", { root: "./public/" });
})

router.get("/profile", profile, (req, res) => {
    if(req.user) {
        res.render("profile", {status: "loggedIn", user: req.user});
    }else{
        res.render("profile", {status: "no", user: "nothing"});
    }
})

router.get("/admin/opinie", adminOpinie)
router.post("/admin/opinie", delete_opinion)
router.get("/addOpinia", addOpinia)
router.get("/admin", admin)
router.post("/admin", update_status)
router.get("/zarezerwowane", zarezerwowane)
router.get("/opinie", opinie)
router.get("/logout", logout)
router.get("/rezerwacja", rezerwacja);
router.post("/rezerwacja", sprawdzDostepnoscTerminu)
router.post("/add_rezerwacja", add_rezerwacja)



module.exports = router;