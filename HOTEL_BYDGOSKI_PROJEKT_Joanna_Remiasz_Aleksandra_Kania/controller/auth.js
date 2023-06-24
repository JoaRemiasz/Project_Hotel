const express = require("express");
const register = require("./register");
const login = require("./login");
const admin = require("./admin");
const update_status = require("./update_status");
const addOpinia = require("./addOpinia");
const opinie = require("./opinie");
const profile = require("./profile");
const adminOpinie = require("./adminOpinie");
const delete_opinion = require("./delete_opinion");
const add_rezerwacja = require("./add_rezerwacja");
const { rezerwacja, sprawdzDostepnoscTerminu } = require("../controller/rezerwacja");

const router = express.Router();
router.post("/profile", profile)
router.post("/register", register)
router.post("/login", login)
router.post("/rezerwacja", rezerwacja);
router.post("/rezerwacja", sprawdzDostepnoscTerminu)
router.post("/admin", admin)
router.post("/admin", update_status)
router.post("/addOpinia", addOpinia)
router.post("/opinie", opinie)
router.post("/admin/opinie", adminOpinie)
router.post("/admin/opinie", delete_opinion)
router.post("/add_rezerwacja", add_rezerwacja)

module.exports = router;
