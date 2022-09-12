var sideInput = document.querySelectorAll(".side-input");
var checkButton = document.querySelector("#calculate-hypotenuse");
var outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  var sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  var sumOfSquares = calculateSumOfSquares(
    Number(sideInput[0].value),
    Number(sideInput[1].value)
  );
  var lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  outputEl.innerText = "Value of the Hypotenuse is " + lengthOfHypotenuse;
}

checkButton.addEventListener("click", calculateHypotenuse);
