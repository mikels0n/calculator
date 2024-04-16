let numberOne = 0;
let numberTwo = 0;
let operator = '';
let numberOnDisplay = ["0"];
let previousCalcul = false;
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const display = document.querySelector('#display');
const clear = document.querySelector('#clear')
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const result = document.querySelector('#result');

function add(numberOne,numberTwo) {
    numberOne = parseInt(numberOne) + parseInt(numberTwo);
    return numberOne;
}

function subtract(numberOne,numberTwo) {
    numberOne = parseInt(numberOne) - parseInt(numberTwo);
    return numberOne;
}

function multiply(numberOne,numberTwo) {
    numberOne = parseInt(numberOne) * parseInt(numberTwo);
    return numberOne;
}

function divide(numberOne,numberTwo) {
    numberOne = parseInt(numberOne) / parseInt(numberTwo);
    return numberOne;
}

function arrayToNum(array) {
    let num = array.toString();
    num = num.replaceAll(",","");
    return(num);
}

function refreshDisplay() {
    display.textContent = arrayToNum(numberOnDisplay);
}
refreshDisplay();

function clearArray(array) {
    let x = array.length;
    for(let i = 0; i < x; i++) {
        array.shift();
    }
}

function checkZeroOnDisplay() {
    if (numberOnDisplay[0] == "0") {
        numberOnDisplay.shift();
    }
} 

function checkOperator() {
    if (operator != "" && numberOnDisplay[0] == "0") {
        clearArray(numberOnDisplay);
    }
}

function maxLengthCheck() {
    if (numberOnDisplay.length == 9) {
        return(true);
    }
    else {
        return(false);
    }
}

one.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    if (maxLengthCheck() == true) {
        return
    }
    else {
        numberOnDisplay.push("1");
        refreshDisplay();
    }
})

two.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    if (maxLengthCheck() == true) {
        return
    }
    else {
        numberOnDisplay.push("2");
        refreshDisplay();
    }
})

three.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    if (maxLengthCheck() == true) {
        return
    }
    else {
        numberOnDisplay.push("3");
        refreshDisplay();
    }
})

four.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    if (maxLengthCheck() == true) {
        return
    }
    else {
        numberOnDisplay.push("4");
        refreshDisplay();
    }
})

five.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    if (maxLengthCheck() == true) {
        return
    }
    else {
        numberOnDisplay.push("5");
        refreshDisplay();
    }
})

six.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    if (maxLengthCheck() == true) {
        return
    }
    else {
        numberOnDisplay.push("6");
        refreshDisplay();
    }
})

seven.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    if (maxLengthCheck() == true) {
        return
    }
    else {
        numberOnDisplay.push("7");
        refreshDisplay();
    }
})

eight.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    if (maxLengthCheck() == true) {
        return
    }
    else {
        numberOnDisplay.push("8");
        refreshDisplay();
    }
})

nine.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    if (maxLengthCheck() == true) {
        return
    }
    else {
        numberOnDisplay.push("9");
        refreshDisplay();
    }
})

zero.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    if (maxLengthCheck() == true) {
        return
    }
    else {
        numberOnDisplay.push("0");
        refreshDisplay();
    }
})

clear.addEventListener('click', () => {
    numberOne = 0;
    numberTwo = 0;
    operator = "";
    clearArray(numberOnDisplay);
    numberOnDisplay.push("0");
    refreshDisplay();
})

plusButton.addEventListener('click', () => {
    if (numberOnDisplay.length == 0) {
        operator = "+";
    } 
    else if (operator != "") {
        result.click();
        operator = "+";
    }
    else {
        operator = "+";
        numberOne = arrayToNum(numberOnDisplay);
        clearArray(numberOnDisplay);
    }
})

minusButton.addEventListener('click', () => {
    if (numberOnDisplay.length == 0) {
        operator = "-";
    } 
    else if (operator != "") {
        result.click();
        operator = "-";
    }
    else {
        operator = "-";
        numberOne = arrayToNum(numberOnDisplay);
        clearArray(numberOnDisplay);
    }
})

divideButton.addEventListener('click', () => {
    if (numberOnDisplay.length == 0) {
        operator = "/";
    } 
    else if (operator != "") {
        result.click();
        operator = "/";
    }
    else {
        operator = "/";
        numberOne = arrayToNum(numberOnDisplay);
        clearArray(numberOnDisplay);
    }
})

multiplyButton.addEventListener('click', () => {
    if (numberOnDisplay.length == 0) {
        operator = "*";
    } 
    else if (operator != "") {
        result.click();
        operator = "*";
    }
    else {
        operator = "*";
        numberOne = arrayToNum(numberOnDisplay);
        clearArray(numberOnDisplay);
    }
})

result.addEventListener('click', () => {
    let displayResult = "";
    numberTwo = arrayToNum(numberOnDisplay);
    if (numberOne == 0 && numberTwo == 0) {
        return;
    } 
    else if (operator == "/" && numberTwo == 0){
        clear.click();
        display.textContent = "CAN'T DO.";
    }
    else { 
        numberOne = operate(operator, numberOne, numberTwo);
        clearArray(numberOnDisplay);
        operator = "";
        if (numberOne % 1 == 0.5) {
            displayResult = (numberOne).toFixed(1).toString();
            if (displayResult.length > 9) {
                display.textContent = "Num too long."
            }
            else display.textContent = displayResult;
        }
        else {
            displayResult = numberOne.toString();
            if (displayResult.length > 9) {
                display.textContent = "Num2Long";
            }
            else 
            display.textContent = displayResult;
        }
    }
})

function operate(operator, numberOne, numberTwo) {
    switch (operator) {
        case '+': 
            return add(numberOne,numberTwo);
        case '-': 
            return subtract(numberOne,numberTwo);
        case '*':
            return multiply(numberOne, numberTwo);
        case '/':
            return divide(numberOne,numberTwo);
    }
}