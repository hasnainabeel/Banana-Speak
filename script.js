var translateButton = document.querySelector("#translate-btn")
var inputText = document.querySelector("#inputText")
var outputDiv = document.querySelector(".output")
var URL = "https://api.funtranslations.com/translate/minion.json"

translateButton.addEventListener("click",clickEventHandler)


function clickEventHandler(){
    fetch(makingURL())
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText
    })
    .catch(errorHandler)
}

function makingURL() {
    var finalURL = (URL + "?text=" + inputText.value);
    return finalURL
}

function errorHandler(error) {
    console.log("Error occurred")
    alert("Something is wrong with the server! Try again later")
}