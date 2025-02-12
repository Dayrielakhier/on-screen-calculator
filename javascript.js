function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a ,b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

let num
let operator
let num2

function operate(num, operator, num2) {
    switch(operator) {
        case '+':
            add(num, num2);
            break;

        case '-':
            subtract(num, num2);
            break;
        
        case 'x':
            multiply(num, num2);
            break;

        case ':':
            divide(num, num2);
            break;

        default:
            console.log("Invalid operator");
    }
}

