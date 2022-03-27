// display numbers on screen on button press
let userNumberOne, myOperator, userNumberTwo;
let calculatorDisplay = document.querySelector(".display__userInput");

let pressedNum = document.querySelectorAll("button");
const allOperator = document.querySelectorAll(".operator");

for (let i = 0; i < pressedNum.length; i++) {
    pressedNum[i].addEventListener("click", () => {
        calculatorDisplay.textContent += pressedNum[i].textContent;

        if (userNumberOne) {
            userNumberTwo = calculatorDisplay.textContent;
        } else if (/[-+/x]/.test(calculatorDisplay.textContent)) {
            filteredDisplayNum = calculatorDisplay.textContent.slice(0, -1);
            myOperator = calculatorDisplay.textContent.slice(-1);

            //this fuction disables the other operator when first one is selected
            disableOperators();

            userNumberOne = filteredDisplayNum;

            calculatorDisplay.textContent = "";
        }
    });
}

// clear display
const allClear = document.querySelector(".clear");
allClear.addEventListener("click", clearDisplay);

function clearDisplay() {
    calculatorDisplay.textContent = "";
    location.reload();
}
