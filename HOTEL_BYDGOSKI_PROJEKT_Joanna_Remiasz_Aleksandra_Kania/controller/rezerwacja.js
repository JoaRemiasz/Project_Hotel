const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const rezerwacja = async (req, res) => {
  db.query("SELECT * FROM rooms", (err, roomsResult) => {
    if (err) throw err;

    db.query("SELECT * FROM spa", (err, spaResult) => {
      if (err) throw err;

      res.render("rezerwacja", {
        rooms: roomsResult,
        spa: spaResult,
        spaSelected: req.body.spa,
      });
    });
  });
};

// Dodajemy nową funkcję do sprawdzania dostępności terminu w bazie danych
const sprawdzDostepnoscTerminu = async (req, res) => {
  const odData = req.body.selectedDate1;
  const doData = req.body.selectedDate2;

  db.query(
    "SELECT * FROM reservation WHERE (od_data <= ? AND do_data >= ?) OR (od_data <= ? AND do_data >= ?)",
    [odData, odData, doData, doData],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Wystąpił błąd podczas sprawdzania dostępności terminu.");
      }

      if (result.length > 0) {
        return res.status(200).send("Termin zarezerwowany");
      } else {
        return res.status(200).send("Termin dostępny");
      }
    }
  );
};

module.exports = { rezerwacja, sprawdzDostepnoscTerminu };
