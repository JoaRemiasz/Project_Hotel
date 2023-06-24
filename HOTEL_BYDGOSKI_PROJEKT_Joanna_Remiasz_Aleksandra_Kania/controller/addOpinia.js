const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");


const addOpinia = async (req, res) => {
    const {lastname, opinia} = req.body
        
                db.query('INSERT INTO opinia SET ?', {id:'', lastname:lastname, datetime:new Date(), opinia:opinia}, (error, results) => {
                    if(error) throw error;
                    return res.json({ status: "success", success: "Opinia została dodana!"})
                })
   

}
module.exports = addOpinia;