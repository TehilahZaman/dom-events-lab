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
    console.log(numVal1);
    console.log(numVal2);
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
        console.log(displayEl.innerText);
    }
    console.log(operVal);
  });
});

equalsButton.addEventListener("click", () => {
  if (operVal === "+") {
    console.log(parseInt(numVal1) + parseInt(numVal2));
    displayEl.innerText = parseInt(numVal1) + parseInt(numVal2);
  } else if (operVal === "-") {
    console.log(parseInt(numVal1) - parseInt(numVal2));
    displayEl.innerText = parseInt(numVal1) - parseInt(numVal2);
  } else if (operVal === "*") {
    console.log(parseInt(numVal1) * parseInt(numVal2));
    displayEl.innerText = parseInt(numVal1) * parseInt(numVal2);
  } else if (operVal === "/") {
    console.log(parseInt(numVal1) / parseInt(numVal2));
    displayEl.innerText = parseInt(numVal1) / parseInt(numVal2);
  }
});

/*-------------------------------- Functions --------------------------------*/

// i did it!!

/*
notes for adding more details:
can i add another number after i press the quals sign and a operator?
  try : else if (numb2 === "") ...
change it so that operators won't dispay if there is no number1 selected
*/
