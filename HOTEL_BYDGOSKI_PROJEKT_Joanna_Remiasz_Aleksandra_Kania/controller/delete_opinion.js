const db = require("../routes/db-config");

const delete_opinion = async (req, res) => {
  const { id } = req.body;

  db.query('DELETE FROM opinia WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.redirect('/admin/opinie');
  });
};
module.exports = delete_opinion;
