const formData = require('form-data');
const db = require("../routes/db-config");
const mailgun = require('mailgun-js')({
  apiKey: '0b5cf9c4caaa2e8f86634457b9a95905-af778b4b-1a0adf53',
  domain: 'sandboxff5c8297deee44629ed8a100fa8fc2f3.mailgun.org',
});

const sendReservationEmail = async (email, lastname, od_data, do_data, totalCost) => {
  try {
    const data = {
      from: 'Hotel_Bydgoski <mailgun@sandboxff5c8297deee44629ed8a100fa8fc2f3.mailgun.org>',
      to: email,
      subject: 'Potwierdzenie rezerwacji',
      text: `Dziękujemy za dokonanie rezerwacji.
            Rezerwacja złożona na imię i nazwisko: ${lastname}.
            Rezerwacja od ${od_data} do ${do_data}.
            Kwota do zapłaty: ${totalCost}
                           
                                          Hotel Bydgoski
                                          Adres: ul. Wojska Polskiego 1 Bydgoszcz 88-400
                                          Nr. tel.: 999-999-999
                                          E-mail: Hotel_Bydgoski@gmail.com`,
    };

    const response = await mailgun.messages().send(data);
    console.log(response); // Zaloguj dane odpowiedzi
  } catch (error) {
    throw new Error('Błąd podczas wysyłania wiadomości e-mail.');
  }
};

const add_rezerwacja = async (req, res) => {
  const { lastname, email, number, selectedDate1, selectedDate2, room, spa, totalCost } = req.body;

  try {
    await db.query('INSERT INTO reservation SET ?', {
      idre: '',
      lastname: lastname,
      email: email,
      number: number,
      od_data: selectedDate1,
      do_data: selectedDate2,
      idr: room,
      ids: spa,
      koszt: totalCost,
      state: 'w trakcie',
    });

    await sendReservationEmail(email, lastname, selectedDate1, selectedDate2, totalCost);

    res.redirect('/udana_rezerwacja');
  } catch (error) {
    return res.status(500).json({ status: 'error', error: 'Wystąpił błąd podczas zapisywania rezerwacji.' });
  }
};

module.exports = add_rezerwacja;
