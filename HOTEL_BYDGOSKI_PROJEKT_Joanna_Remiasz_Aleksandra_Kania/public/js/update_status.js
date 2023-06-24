form.addEventListener("submit", () => {
    const admin = {
    id: id.value,
    state: state.value
    };
    fetch("/api/admin", {
    method: "POST",
    body: JSON.stringify(admin),
    headers: {
    "Content-Type": "application/json"
    }
    }).then(res => res.json())
    .then(data => {
    if(data.status == "error"){
    success.style.display = "none";
    error.style.display = "block";
    error.innerText = data.error;
    }else{
    error.style.display = "none";
    success.style.display = "block";
    success.innerText = data.success;
    }
    });
    });