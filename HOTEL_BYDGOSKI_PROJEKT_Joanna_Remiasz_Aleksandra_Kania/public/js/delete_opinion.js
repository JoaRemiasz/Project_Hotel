form.addEventListener("submit", () => {
    const delete_opinion = {
    id: id.value
    };
    fetch("/api/admin/opinie", {
    method: "POST",
    body: JSON.stringify(delete_opinion),
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