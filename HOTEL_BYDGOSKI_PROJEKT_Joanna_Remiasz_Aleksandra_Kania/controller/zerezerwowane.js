const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const zarezerwowane = async (req, res) => {
    db.query('SELECT r.*, ro.name AS room_name, s.name AS spa_name FROM reservation r LEFT JOIN rooms ro ON r.idr = ro.idr LEFT JOIN spa s ON r.ids = s.ids', (err, result) => {
        if (err) throw err;
        res.render('zarezerwowane', { reservation: result });
    });
}

module.exports = zarezerwowane;
