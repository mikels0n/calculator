let numberOne = 0;
let numberTwo = 0;
let operator = '';
let numberOnDisplay = ["0"];
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

one.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    numberOnDisplay.push("1");
    refreshDisplay();
})

two.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    numberOnDisplay.push("2");
    refreshDisplay();
})

three.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    numberOnDisplay.push("3");
    refreshDisplay();
})

four.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    numberOnDisplay.push("4");
    refreshDisplay();
})

five.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    numberOnDisplay.push("5");
    refreshDisplay();
})

six.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    numberOnDisplay.push("6");
    refreshDisplay();
})

seven.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    numberOnDisplay.push("7");
    refreshDisplay();
})

eight.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    numberOnDisplay.push("8");
    refreshDisplay();
})

nine.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    numberOnDisplay.push("9");
    refreshDisplay();
})

zero.addEventListener('click', () => {
    checkZeroOnDisplay();
    checkOperator();
    numberOnDisplay.push("0");
    refreshDisplay();
})

clear.addEventListener('click', () => {
    clearArray(numberOnDisplay);
    numberOnDisplay.push("0");
    refreshDisplay();
})

plusButton.addEventListener('click', () => {
    operator = "+";
    numberOne = arrayToNum(numberOnDisplay);
    clearArray(numberOnDisplay);
})

result.addEventListener('click', () => {
    numberTwo = arrayToNum(numberOnDisplay);
    display.textContent = operate(operator, numberOne, numberTwo);
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

//Funkce pro generování čísla na displeji klikáním tlačítek