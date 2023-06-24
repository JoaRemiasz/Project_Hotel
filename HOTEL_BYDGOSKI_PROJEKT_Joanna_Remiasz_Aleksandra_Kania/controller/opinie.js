const db = require("../routes/db-config");

const opinie = async (req, res) => {
db.query('SELECT * FROM opinia', (err, result) => {
if (err) throw err;

    const itemsPerPage = 5;
    const currentPage = req.query.page ? parseInt(req.query.page) : 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(result.length / itemsPerPage);
    
    res.render('opinie', { opinia: result, currentPage, totalPages, startIndex, endIndex });
  });
  
}
module.exports = opinie;