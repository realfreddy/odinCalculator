const display = document.querySelector(".display-text");
const buttonContainer = document.querySelector(".buttoncontainer");
const buttons = document.querySelectorAll(".buttoncontainer button");
const equalsButton = document.querySelector("#equals");

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

let numberOne = 0;
let numberTwo = 0;
let operation = "";

function operate(numberOne, numberTwo, operation) {
  if (operation === "+") {
    return add(numberOne, numberTwo);
  }
  if (operation === "-") {
    return subtract(numberOne, numberTwo);
  }
  if (operation === "×") {
    return multiply(numberOne, numberTwo);
  }
  if (operation === "÷") {
    return divide(numberOne, numberTwo);
  }
}

buttonContainer.addEventListener("click", (event) => {
  if (!event.target.matches('button')) return;

  const buttonText = event.target.textContent;

  if (buttonText === "AC") {
    display.textContent = "0";
  } else if (
    buttonText === "+" ||
    buttonText === "-" ||
    buttonText === "×" ||
    buttonText === "÷"
  ) {
    numberOne = display.textContent;
    operation = event.target.textContent;
    clearDisplay();
  } else if (buttonText === "=") {
    numberTwo = display.textContent;
    result = operate(parseFloat(numberOne), parseFloat(numberTwo), operation);
    display.textContent = result.toFixed(2);
  } else {
    if (display.textContent === "0") {
      display.textContent = buttonText;
    } else {
      display.textContent += buttonText;
    }
  }
});

function clearDisplay() {
  return (display.textContent = "");
}
