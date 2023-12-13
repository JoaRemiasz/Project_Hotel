const add_rezerwacja = require("../../controller/add_rezerwacja");

const form = document.getElementById("form");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const number = document.getElementById("number");
const selectedDate1 = document.getElementById("selectedDate1");
const selectedDate2 = document.getElementById("selectedDate2");
const room = document.getElementById("room");
const spa_name = document.getElementById("spa_name");
const totalCost = document.getElementById("totalCost");
const success = document.getElementById("success");
const error = document.getElementById("error");


form.addEventListener("submit", () => {
    const add_rezerwacja = {
        lastname: lastname.value,
        email: email.value,
        number: number.value,
        selectedDate1: selectedDate1.value,
        selectedDate2: selectedDate2.value,
        room: room.value,
        spa: spa_name.value,
        totalCost: totalCost.value
    };
    fetch("/api/rezerwacja", {
        method: "POST",
        body: JSON.stringify(rezerwacja),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
    .then(data => {
        if(data.status === "error"){
            success.style.display = "none";
            error.style.display = "block";
            error.innerText = data.error;
        }else{
            error.style.display = "none";
            success.style.display = "block";
            success.innerText = data.success;
        }
    })
    .catch(error => {
        success.style.display = "none";
        error.style.display = "block";
        error.innerText = "Wystąpił błąd.";
    });
});
