
function agregarData(data) {
    let iData= document.getElementById("inputText")
    data = iData.value
    localStorage.setItem("lstData", data)  
    
}