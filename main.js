const display = document.querySelector(".display-text");
const buttons = document.querySelector(".buttoncontainer");
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

let numberOne;
let numberTwo;
let operation;

function operate(numberOne, numberTwo, operation) {
  if (operation === "+") {
    return add(numberOne, numberTwo);
  }
  if (operation === "-") {
    return subtract(numberOne, numberTwo);
  }
  if (operation === "*") {
    return multiply(numberOne, numberTwo);
  }
  if (operation === "/") {
    return divide(numberOne, numberTwo);
  }
}
buttons.addEventListener("click", (event) => {
  const buttonText = event.target.textContent;
  if (buttonText === "AC") {
    display.textContent = "";
  } else {
    display.textContent += buttonText;
  }
});
