/*-------------------------------- Constants --------------------------------*/
const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const equalsButton = document.querySelector(".button.equals");

/*-------------------------------- Variables --------------------------------*/
let displayEl = document.querySelector(".display"); //this is the variable for the calculator's display
let numVal1 = ""; // variable for the storage of the fist number
let numVal2 = ""; // variable for the storage of the second number
let operVal = ""; // variable for the storage of the operator

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
numberButtons.forEach((number) => {
  number.addEventListener("click", (event) => {
    const clickedNumber = event.target.innerText;
    if (operVal === "") {
      numVal1 += clickedNumber;
      displayEl.innerText = numVal1;
    } else {
      numVal2 += clickedNumber;
      displayEl.innerText = numVal2;
    }
  });
});

operatorButtons.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    const clickedOper = event.target.innerText;
    if (operVal !== "C" && operVal === "") {
      operVal = clickedOper;
      displayEl.innerText = operVal;
    } else if (operVal !== "C" && operVal !== "") {
      operVal = clickedOper;
      displayEl.innerText = operVal;
    }
    if (operVal === "C") {
      (displayEl.innerText = ""),
        (numVal1 = ""),
        (numVal2 = ""),
        (operVal = ""),
        displayEl.innerText;
    }
  });
});

equalsButton.addEventListener("click", () => {
  if (operVal === "+") {
    parseInt(numVal1) + parseInt(numVal2);
    displayEl.innerText = parseInt(numVal1) + parseInt(numVal2);
  } else if (operVal === "-") {
    parseInt(numVal1) - parseInt(numVal2);
    displayEl.innerText = parseInt(numVal1) - parseInt(numVal2);
  } else if (operVal === "*") {
    parseInt(numVal1) * parseInt(numVal2);
    displayEl.innerText = parseInt(numVal1) * parseInt(numVal2);
  } else if (operVal === "/") {
    parseInt(numVal1) / parseInt(numVal2);
    displayEl.innerText = parseInt(numVal1) / parseInt(numVal2);
  }
});

/*-------------------------------- Functions --------------------------------*/
