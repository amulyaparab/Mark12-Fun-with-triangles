var userInput = document.querySelectorAll(".user-input");
var calculateAreaBtn = document.querySelector("#calculate-area-btn");
var outputEl = document.querySelector("#output");

function calculateBaseIntoHeight(b, h) {
  var baseIntoHeight = b * h;
  return baseIntoHeight;
}

function calculateArea() {
  var baseIntoHeight = calculateBaseIntoHeight(
    Number(userInput[0].value),
    Number(userInput[1].value)
  );
  var area = baseIntoHeight / 2;
  outputEl.innerText = "Area of triangle = " + area;
}

calculateAreaBtn.addEventListener("click", calculateArea);
