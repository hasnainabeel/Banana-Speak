var translateButton = document.querySelector("#translate-btn")
var inputText = document.querySelector("#inputText")
var outputDiv = document.querySelector(".output")

translateButton.addEventListener("click",clickEventHandler)


function clickEventHandler(){
    console.log("Clicked")
    console.log("input is", inputText.value)
    outputDiv.innerText = inputText.value

}

