/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

const calculator = document.querySelector("#calculator");
let displayEl = document.querySelector(".display");

const cuurentOperator = document.querySelector(".operator");
const numberButton = document.querySelector(".number");
let num1 = null;
let num2 = null;
let currentOperator = null;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener("click", (event, num1, num2) => {
  if (!event.target.classList.contains("button")) return;
  console.log(event.target.innerText);
  displayEl.innerText = event.target.innerText;
  if (event.target.classList.contains("number")) {
    if (num1 === null) {
      num1 = parseInt(event.target.innerText);
    } else {
      num1 += event.target.innerText;
    }
    displayEl.innerText = num1;
  }
  if (event.target.classList.contains("operator")) {
    if (currentOperator === null) {
      currentOperator = event.target.innerText;
      displayEl.innerText = currentOperator;
    }
  }
  if (num1 !== null && num2 === null && currentOperator === null) {
    num2 = parseInt(event.target.innerText);
    displayEl.innerText = num1 + num2;
  }
  if (currentOperator === "+") {
    return num1 + num2;
  }
});

/*-------------------------------- Functions --------------------------------*/

// clickedButton = event.target.innertText
// this would allow me to set the if statement for all the string values for the buttons clicked and then had them function
