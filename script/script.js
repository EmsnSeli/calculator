//getting all the buttons
let operators = document.querySelectorAll(".operator");
let equalsButton = document.querySelector("#equlasbutton");
let numberButtons = document.querySelectorAll("button:not(.operator):not(#equlasbutton):not(.clearbutton):not(.comma)");
let commabutton = document.querySelector(".comma");

//get p of path writing
let pCurrPath = document.querySelector(".currentPath p");

//get p of cur typing
let pCurrTyping = document.querySelector(".currentInput p");

numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", function() {
        pCurrTyping.textContent += numberButton.value;
    })
});

operators.forEach(operator => {
    operator.addEventListener("click", function() {
        // pCurrTyping.textContent += numberButton.
        console.log(operator.className);
    })
});