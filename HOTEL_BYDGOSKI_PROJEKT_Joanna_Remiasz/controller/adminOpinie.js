const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const adminOpinie = async (req, res) => {
    db.query('SELECT * FROM opinia', (err, result) => {
        if (err) throw err;
        res.render('adminOpinie', { opinia: result });
      });
      
}
module.exports = adminOpinie;