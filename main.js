let numberOne = 0;
let numberTwo = 0;
let operator = '';

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