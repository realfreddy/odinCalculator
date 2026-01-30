const display = document.querySelector(".display-text");
const buttonContainer = document.querySelector(".buttoncontainer");

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
  switch (operation) {
    case "+":
      return add(numberOne, numberTwo);

    case "-":
      return subtract(numberOne, numberTwo);

    case "×":
      return multiply(numberOne, numberTwo);

    case "÷":
      return divide(numberOne, numberTwo);
  }
}

const operators = ["+", "-", "×", "÷"];

buttonContainer.addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;

  const buttonText = event.target.textContent;
  if (buttonText === ".") {
    if (display.textContent.includes(".")) {
      return;
    }
  }
  if (buttonText === "AC") {
    numberOne = 0;
    numberTwo = 0;
    operation = "";
    display.textContent = "0";
  } else if (operators.includes(buttonText)) {
    if (operation != "") {
      let result = operate(
        parseFloat(numberOne),
        parseFloat(display.textContent),
        operation
      );
      display.textContent = result;
      numberOne = result;
      operation = event.target.textContent;
      shouldReplaceDisplay = true; 
    } else {
      numberOne = display.textContent;
      operation = event.target.textContent;
      clearDisplay();
    }
  } else if (buttonText === "=") {
    numberTwo = display.textContent;
    let result = operate(
      parseFloat(numberOne),
      parseFloat(numberTwo),
      operation
    );
    if (result % 1 !== 0) {
      display.textContent = result.toFixed(2);
    } else {
      display.textContent = result;
    }
    shouldReplaceDisplay = true;  
  } else {
    if (display.textContent === "0" || shouldReplaceDisplay) {
      display.textContent = buttonText;
      shouldReplaceDisplay = false;  // Reset the flag
    } else {
      display.textContent += buttonText;
    }
}
});

function clearDisplay() {
  display.textContent = "";
}
