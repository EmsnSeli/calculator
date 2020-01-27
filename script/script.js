//getting all the buttons
let operators = document.querySelectorAll(".operator");
let equalsButton = document.querySelector("#equlasbutton");
let numberButtons = document.querySelectorAll("button:not(.operator):not(#equlasbutton):not(.clearbutton):not(.comma)");
let commabutton = document.querySelector(".comma");

//get p of path writing
let pCurrPath = document.querySelector(".currentPath p");

//get p of cur typing
let pCurrTyping = document.querySelector(".currentInput p");

let operatorPressed = false;
let currTypingValue = "";

numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", function () {
        if (pCurrTyping.textContent.length < 11) {
            if (operatorPressed) {
                pCurrTyping.textContent = "";
                pCurrTyping.textContent += numberButton.value;
                operatorPressed = false;
            } else
                pCurrTyping.textContent += numberButton.value;
            currTypingValue = pCurrTyping.textContent;
        }
    })
});

operators.forEach(operator => {
    operator.addEventListener("click", function () {
        if(!pCurrTyping.textContent) return;
        pCurrPath.textContent += currTypingValue + operator.value;
        operatorPressed = true;
        operatorValue = operator.value;
        console.log(operator.className + operator.value);
    })
});

//operator functions
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => {
    if (b == 0) return "Error";
    return a / b;
}
let multiply = (a, b) => a * b;