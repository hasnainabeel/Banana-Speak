var translateButton = document.querySelector("#translate-btn")
var inputText = document.querySelector("#inputText")


translateButton.addEventListener("click",clickEventHandler)
function clickEventHandler(){
    console.log("Clicked")
    console.log("input is", inputText.value)
}

/* 
    1."textarea"
    2.".btn-primary"
    3."#input-btn"
    4."input[name='translator']"
*/
