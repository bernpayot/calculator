let firstOperand = '';
let secondOperand = '';
let currentOperation = '';
let result = null;

const operatorDisplay = document.querySelector(".screen-operator");
const display = document.querySelector(".screen-content");
const numButtons = document.querySelectorAll(".button.num");
numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        appendNumber(button.innerText);
    })
});

const operatorButtons = document.querySelectorAll(".button.operator");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        appendOperation(button.innerText);
    })
});

const equalButton = document.querySelector(".button.equal");
equalButton.addEventListener("click", () => {
    operate();
});

const clearButton = document.querySelector(".button.clear");
clearButton.addEventListener("click", () => {
    clear();
})

function appendNumber(num) {
    firstOperand += num;
    display.innerText = firstOperand.substring(0,9);
}

function appendOperation(operation) {
    if (firstOperand === '') return;
    currentOperation = operation;
    secondOperand = firstOperand;
    firstOperand = '';
    operatorDisplay.innerText = currentOperation;
}

function operate() {
    if (firstOperand === '' || secondOperand === '') return;

    let previous = parseInt(secondOperand);
    let current = parseInt(firstOperand);

    switch (currentOperation) {
        case '+':
            result = previous + current;
            break;
        case '–':
            result = previous - current;
            break;
        case '×':
            result = previous * current;
            break;
        case '÷':
            if (current === 0) {
                result = "lmfao no";
                break;
            }
            result = previous / current;
            break;
        default:
            return;
    }
    firstOperand = result;
    secondOperand = '';
    currentOperation = '';
    display.innerText = Math.floor(result * 100) / 100;
}

function clear() {
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
    display.innerText = "0";
    operatorDisplay.innerText = '';
}



