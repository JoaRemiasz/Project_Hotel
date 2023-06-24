const db = require("../routes/db-config");

const update_status = async (req, res) => {
const {state, id} = req.body;
db.query('UPDATE reservation SET state = ? WHERE idre = ?', [state, id], (err, result) => {
    if (err) throw err;
    res.redirect('/admin');
    
});
};

module.exports = update_status;
