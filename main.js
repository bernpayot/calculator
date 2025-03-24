let answer = '';
let num1 = '';
let num2 = '';
let operator = '';

function add(num1, num2) {
    answer = num1 + num2;
    return answer;
}

function subtract(num1, num2) {
    answer = num1 - num2;
    return answer;
}

function multiply(num1, num2) {
    answer = num1 * num2;
    return answer;
}

function divide(num1, num2) {
    answer = num1 / num2;
    return answer;
}

function operate() {

}

console.log(add(12,13));
console.log(subtract(12,15));
console.log(multiply(5,10));
console.log(divide(4,2));