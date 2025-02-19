function add(a, b) {
    result = a + b
}

function subtract(a, b) {
    result = a - b
}

function multiply(a ,b) {
    result = a * b
}

function divide(a, b) {
    if (b === 0) {
        result = "ERROR!"
    } else {
        result = +(a / b).toFixed(10)
    }
}

let num1
let operator
let num2

function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            add(num1, num2);
            break;

        case '−':
            subtract(num1, num2);
            break;
        
        case '×':
            multiply(num1, num2);
            break;

        case '÷':
            divide(num1, num2);
            break;

        default:
            console.log("Invalid operator");
    }
}

const digits = document.querySelectorAll(".digit")
const operators = document.querySelectorAll(".operator")
const dis = document.querySelector("#display")

let isFirstClick1 = true
let isFirstClick2 = true

function getNum1(digit) {
    if (isFirstClick1) {
        dis.textContent = ""
        dis.textContent += digit.textContent

        isFirstClick1 = false
    } else {
        dis.textContent += digit.textContent
    }
        num1 = +(dis.textContent);
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
            getNum1(digit)
        } else {
            getNum2(digit)
        }
    })
})

operators.forEach((op) => {
    op.addEventListener("click", () => {
        operator = op.textContent;
        
    })
})

const calc = document.querySelector(".operate")

calc.addEventListener("click", () => {
    operate(num1, operator, num2);
    dis.textContent = result
})

const clear = document.querySelector("#clear")

clear.addEventListener("click", () => {
    num1 = undefined
    num2 = undefined
    operator = undefined
    dis.textContent = 0
    isFirstClick1 = true
    isFirstClick2 = true
})