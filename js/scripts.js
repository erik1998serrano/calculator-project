// * query selectors
const calculatorDisplay = document.querySelector(".display__user-input");
const numberButtons = document.querySelectorAll("button");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

// store first input operator and second input
let firstNum, mathOperator, secondNum;

// * eventlistener to show number or decimal on screen onclick
// loops through the buttons and adds a click event listener.
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", () => {
        // write to display
        calculatorDisplay.innerHTML += numberButtons[i].innerHTML;

        // if statement to store variables for calculation
        if (firstNum) {
            secondNum = calculatorDisplay.innerHTML;

            // * going from no numbers selected, to first number selected
            // checking to see if user has selected an operator or not
            // ! make sure "-" symbol is on either end of regex or it won't work
        } else if (/[-+÷x]/.test(calculatorDisplay.innerHTML)) {
            filteredDisplayNum = calculatorDisplay.innerHTML.slice(0, -1);
            mathOperator = calculatorDisplay.innerHTML.slice(-1);

            // disable other operators when operator is selected
            disableOperators();

            firstNum = filteredDisplayNum;

            // if operator has been selected clear the display for second value
            calculatorDisplay.innerHTML = "";
        }
    });
}

// * eventlistener to enable calculate function upon selection of equal button
equalButton.addEventListener("click", () => {
    // if the last chracter on the display is a decimal then remove it and continue
    if (calculatorDisplay.innerHTML.endsWith(".")) {
        calculatorDisplay.innerHTML = calculatorDisplay.innerHTML.slice(0, -1);
    } else {
        calculatorDisplay.innerHTML = calculate(
            firstNum,
            mathOperator,
            secondNum,
        );
        // resetting everything after calculation is complete
        firstNum = 0;
        mathOperator = "";
        secondNum = 0;
        enableOperators();
    }
});

// * eventlistener to clear the display upon selection of the AC button
clearButton.addEventListener("click", () => {
    calculatorDisplay.innerText = "";
    location.reload();
});

// disable operators
const disableOperators = () => {
    operatorButtons.forEach((btn) => {
        btn.disabled = true;
        // if an operator is selected, disable the other operators
        // ? need to find a way to switch operators
        if (btn.innerHTML === mathOperator) {
            btn.classList.add("selected-operator");
        }
    });
};

// re-enable operators
const enableOperators = () => {
    operatorButtons.forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove("selected-operator");
    });
};

// * calculation function based on numOne, operator, numTwo chosen in the operator variable
const calculate = (numOne, operator, numTwo) => {
    switch (operator) {
        case "+":
            return parseFloat(numOne) + parseFloat(numTwo);

        case "-":
            return parseFloat(numOne) - parseFloat(numTwo);

        case "x":
            return parseFloat(numOne) * parseFloat(numTwo);

        case "÷":
            return parseFloat(numOne) / parseFloat(numTwo);

        default:
            return alert("INVALID OPERATOR");
    }
};
