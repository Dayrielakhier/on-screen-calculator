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
        digit.style.opacity = 0.5

        setTimeout(() => {digit.style.opacity = 'initial'}, 100)

        if (operator === undefined) {
            getNum1(digit)
        } else {
            getNum2(digit)
        }
    })
})

operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (num1 !== undefined && num2 === undefined) {
            operator = op.textContent
        } else if (num1 !== undefined && num2 !== undefined) {
            operate(num1, operator, num2)
            dis.textContent = result
            num1 = result
            isFirstClick2 = true
            operator = op.textContent
        }
    })
})

const calc = document.querySelector(".operate")

calc.addEventListener("click", () => {
    if (num1 !== undefined && operator !== undefined && num2 !== undefined) {
        operate(num1, operator, num2)
        dis.textContent = result
    } else {
        dis.textContent = dis.textContent
    }
})

const clear = document.querySelector("#clear")

clear.addEventListener("click", () => {
    clear.style.opacity = 0.5

    setTimeout(() => {clear.style.opacity = 'initial'}, 100)

    num1 = undefined
    num2 = undefined
    operator = undefined
    dis.textContent = 0
    isFirstClick1 = true
    isFirstClick2 = true
})

const backspace = document.querySelector("#backspace")

backspace.addEventListener("click", () => {
    backspace.style.opacity = 0.5

    setTimeout(() => {backspace.style.opacity = 'initial'}, 100)

    if (dis.textContent == num1) {
        num1 = +num1.toString().slice(0, -1)
        dis.textContent = num1
    } else if (dis.textContent == num2) {
        num2 = +num2.toString().slice(0, -1)
        dis.textContent = num2
    }
})