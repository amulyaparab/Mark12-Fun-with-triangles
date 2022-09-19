var sideInput = document.querySelectorAll(".side-input");
var checkButton = document.querySelector("#calculate-hypotenuse");
var outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  var sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  var sideOne = Number(sideInput[0].value);
  var sideTwo = Number(sideInput[1].value);
  var sumOfSquares = calculateSumOfSquares(sideOne, sideTwo);
  var lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  outputEl.innerText =
    "Value of the Hypotenuse is " + lengthOfHypotenuse.toFixed(2);
  if (sideInput[0].value <= 0) {
    outputEl.innerText = "Enter Valid data❌";
  }
  if (sideInput[1].value <= 0) {
    outputEl.innerText = "Enter Valid data❌";
  }
}

checkButton.addEventListener("click", calculateHypotenuse);
