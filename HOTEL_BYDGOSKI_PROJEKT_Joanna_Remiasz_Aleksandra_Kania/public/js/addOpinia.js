form.addEventListener("submit", () => {
    const addOpinia = {
        lastname: lastname.value,
        opinia: opinia.value
    }
    fetch("/api/addOpinia", {
        method: "POST",
        body: JSON.stringify(addOpinia),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if(data.status == "success"){
                error.style.display = "none";
                success.style.display = "block";
                success.innerText = data.success;
            }
        })
})