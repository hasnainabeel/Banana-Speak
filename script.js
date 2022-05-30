var translateButton = document.querySelector("#translate-btn")
var inputText = document.querySelector("#inputText")
var outputDiv = document.querySelector(".output")
var URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

translateButton.addEventListener("click",clickEventHandler)


function clickEventHandler(){
    console.log("Clicked")
    outputDiv.innerText = inputText.value
    fetch(makingURL())
    .then(response => response.json())
    .then(json => console.log(json))
}

function makingURL() {
    var finalURL = (URL + "?text=" + inputText.value);
    return finalURL
}
