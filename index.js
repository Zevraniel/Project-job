const heading = document.querySelector("h1")
const text ="Welcome to the Desktop..."
let idletter = 1
let speed = 200



function printText(){
    heading.innerText =text.slice(0,idletter)
    idletter++
    setTimeout(printText,speed)
}

printText()