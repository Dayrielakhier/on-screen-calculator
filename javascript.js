function add(a, b) {
    result = a + b
    return result
}

function subtract(a, b) {
    result = a - b
    return result
}

function multiply(a ,b) {
    result = a * b
    return result
}

function divide(a, b) {
    result = a / b
    return result
}

let num
let operator
let num2

function operate(num, operator, num2) {
    switch(operator) {
        case '+':
            add(num, num2);
            break;

        case '−':
            subtract(num, num2);
            break;
        
        case '×':
            multiply(num, num2);
            break;

        case '÷':
            divide(num, num2);
            break;

        default:
            console.log("Invalid operator");
    }
}

const digits = document.querySelectorAll(".digit")
const operators = document.querySelectorAll(".operator")
const dis = document.querySelector("#display")
const clear = document.querySelector("#clear")

let isFirstClick1 = true
let isFirstClick2 = true

function getNum(digit) {
    if (isFirstClick1) {
        dis.textContent = ""
        dis.textContent += digit.textContent

        isFirstClick1 = false
    } else {
        dis.textContent += digit.textContent
    }
        num = +(dis.textContent);
}

function getNum2(digit) {
    if (isFirstClick2) {
        dis.textContent = ""
        dis.textContent += digit.textContent

        isFirstClick2 = false
    } else {
        dis.textContent += digit.textContent
    }
        num2 = +(dis.textContent);
}

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (typeof operator === 'undefined') {
            getNum(digit)
        } else {
            getNum2(digit)
        }
    })
})

operators.forEach((op) => {
    op.addEventListener("click", () => {
        operator = op.textContent
    })
})

const calc = document.querySelector(".operate")

calc.addEventListener("click", () => {
    operate(num, operator, num2);
    dis.textContent = result
})