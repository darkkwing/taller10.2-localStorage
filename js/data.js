let dataEl, dataGet

document.addEventListener("DOMContentLoaded", () => {
    dataEl = document.getElementById("data");
    
    dataGet = localStorage.getItem("lstData")

    dataEl.innerHTML = dataGet
})

