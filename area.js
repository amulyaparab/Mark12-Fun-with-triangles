var userInput = document.querySelectorAll(".user-input");
var calculateAreaBtn = document.querySelector("#calculate-area-btn");
var outputEl = document.querySelector("#output");

function calculateBaseIntoHeight(b, h) {
  var baseIntoHeight = b * h;
  return baseIntoHeight;
}

function calculateArea() {
  var base = Number(userInput[0].value);
  var height = Number(userInput[1].value);
  var baseIntoHeight = calculateBaseIntoHeight(base, height);
  var area = baseIntoHeight / 2;
  outputEl.innerText = "Area of triangle = " + area.toFixed(2);
  if (base <= 0) {
    outputEl.innerText = "Enter valid data❌";
  }
  if (height <= 0) {
    outputEl.innerText = "Enter valid data❌";
  }
}

calculateAreaBtn.addEventListener("click", calculateArea);
