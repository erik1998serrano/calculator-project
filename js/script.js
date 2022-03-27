// * display numbers on screen on button press
// query selectors for buttons + operators
const calculatorDisplay = document.querySelector(".display__userInput");
const pressedNum = document.querySelectorAll("button");
const allOperator = document.querySelectorAll(".operator");

// press number onclick eventlistener
for (let i = 0; i < pressedNum.length; i++) {
    pressedNum[i].addEventListener("click", () => {
        // display number
        calculatorDisplay.textContent += pressedNum[i].textContent;
    });
}

// * clear display
// query selector for clear button
const clearDisplay = document.querySelector(".clear");

// clear display onclick
clearDisplay.addEventListener("click", () => {
    calculatorDisplay.textContent = "";
});

// * calculation
const calculate = (numOne, operator, numTwo) => {
    switch (operator) {
        case "+": {
            return parseFloat(numOne) + parseFloat(numTwo);
            break;
        }

        case "-": {
            return parseFloat(numOne) - parseFloat(numTwo);
            break;
        }

        case "x": {
            return parseFloat(numOne) * parseFloat(numTwo);
            break;
        }

        case "÷": {
            return parseFloat(numOne) / parseFloat(numTwo);
            break;
        }

        default:
            alert("INVALID OPERATOR");
            break;
    }
};

console.log(calculate(21, "x", 10));
