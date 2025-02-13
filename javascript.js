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

const digits = document.querySelectorAll(".digit")
const dis = document.querySelector("#display")

let isFirstClick = true

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (isFirstClick) {
            dis.textContent = ""
            dis.textContent += digit.textContent

            isFirstClick = false
        } else {
            dis.textContent += digit.textContent
        }
    })
})
