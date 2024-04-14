let numberOne = 0;
let numberTwo = 0;
let operator = '';
let numberOnDisplay = [];
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

function add(numberOne,numberTwo) {
    numberOne += numberTwo;
    return numberOne;
}

function subtract(numberOne,numberTwo) {
    numberOne -= numberTwo;
    return numberOne;
}

function multiply(numberOne,numberTwo) {
    numberOne = numberOne * numberTwo;
    return numberOne;
}

function divide(numberOne,numberTwo) {
    numberOne = numberOne / numberTwo;
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

function clearArray(array) {
}

one.addEventListener('click', () => {
    numberOnDisplay.push("1");
    refreshDisplay();
})

two.addEventListener('click', () => {
    numberOnDisplay.push("2");
    refreshDisplay();
})

three.addEventListener('click', () => {
    numberOnDisplay.push("3");
    refreshDisplay();
})

four.addEventListener('click', () => {
    numberOnDisplay.push("4");
    refreshDisplay();
})

five.addEventListener('click', () => {
    numberOnDisplay.push("5");
    refreshDisplay();
})

six.addEventListener('click', () => {
    numberOnDisplay.push("6");
    refreshDisplay();
})

seven.addEventListener('click', () => {
    numberOnDisplay.push("7");
    refreshDisplay();
})

eight.addEventListener('click', () => {
    numberOnDisplay.push("8");
    refreshDisplay();
})

nine.addEventListener('click', () => {
    numberOnDisplay.push("9");
    refreshDisplay();
})

zero.addEventListener('click', () => {
    numberOnDisplay.push("0");
    refreshDisplay();
})

clear.addEventListener('click', () => {
    numberOnDisplay = [];
    numberOnDisplay.push("0");
    refreshDisplay;
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