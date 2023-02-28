let screen = document.getElementById("screen");
let expression = "";

function addChar(char) {
    expression += char;
    screen.value = expression;
}

function clearScreen() {
    expression = "";
    screen.value = "";
}

function calculate() {
    let result = eval(expression);
    screen.value = result;
    expression = "";
}