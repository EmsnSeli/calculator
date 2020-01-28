//getting all the buttons
let operators = document.querySelectorAll(".operator");
let equalsButton = document.querySelector("#equlasbutton");
let numberButtons = document.querySelectorAll("button:not(.operator):not(#equlasbutton):not(.clearbutton):not(.comma)");
let commabutton = document.querySelector(".comma");
let clearButton = document.querySelector(".clearbutton");
let delButton = document.querySelector("#backspace");

//get p of path writing
let pCurrPath = document.querySelector(".currentPath span");

//get p of cur typing
let pCurrTyping = document.querySelector(".currentInput p");

let operatorPressed = false;
let currTypingValue = "";

let commaPressed = false;
let equalsPressed = false;

//loop over every numberpad and add eventlistener
numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", function() {
        if (equalsPressed) {
            pCurrTyping.textContent = "";
            pCurrPath.textContent = "";
            equalsPressed = false;
        }
        if (pCurrTyping.textContent.length < 11) {
            if (operatorPressed) {
                pCurrTyping.textContent = "";
                pCurrTyping.textContent += numberButton.value;
                operatorPressed = false;
            } else {
                pCurrTyping.textContent += numberButton.value;
                if (pCurrTyping.textContent[0] == "0" && numberButton.value == "0" && !pCurrTyping.textContent.includes(".")) {
                    pCurrTyping.textContent = "0";
                    return;
                }
            }
            currTypingValue = pCurrTyping.textContent;
        }
    })
});

//loop over every operator and add click eventlistener 
operators.forEach(operator => {
    operator.addEventListener("click", function() {
        if (equalsPressed) return;
        if (!pCurrTyping.textContent) return;
        pCurrPath.textContent += currTypingValue + " " + operator.value + " ";
        operatorPressed = true;
        commaPressed = false;
    })
});

//operator functions --> maybe not needed
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => {
    if (b == 0) return "Error";
    return a / b;
}
let multiply = (a, b) => a * b;

//when equals button is pressed resolve the equation
equalsButton.addEventListener("click", function() {
    if (equalsPressed) return;
    pCurrPath.textContent += currTypingValue;
    let evalVal = eval(pCurrPath.textContent);
    pCurrPath.textContent += " =";
    pCurrTyping.textContent = evalVal;
    equalsPressed = true;
});

//add comma when pressed only once
commabutton.addEventListener("click", function() {
    if (pCurrTyping.textContent.includes(".") || operatorPressed) return;
    commaPressed = true;
    pCurrTyping.textContent += ".";
})

//clearbutton handling
clearButton.addEventListener("click", function() {
    pCurrPath.textContent = "";
    pCurrTyping.textContent = "";
    commaPressed = false;
    equalsPressed = false;
    operatorPressed = false;
})

//del button handling
delButton.addEventListener("click", function() {
    if (pCurrTyping.textContent.length > 0)
        pCurrTyping.textContent = pCurrTyping.textContent.slice(0, -1);
})