var angles = document.querySelectorAll(".angle");
var isTriangleBtn = document.querySelector("#is-triangle-button");
var outputEl = document.querySelector("#output");
// console.log(angles[1]);

function calculateSumOfAngles(angle1, angle2, angle3) {
  var sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}
function isTriangle() {
  var sumOfAngles = calculateSumOfAngles(
    Number(angles[0].value),
    Number(angles[1].value),
    Number(angles[2].value)
  );
  if (sumOfAngles === 180) {
    outputEl.innerText = "Yayy! The angles make a triangle!💥";
  } else {
    outputEl.innerText = "Oops the angles do not form a triangle...Try again🙁";
  }
  if (angles[0].value <= 0) {
    outputEl.innerText = "Enter Valid Data❌";
  }
  if (angles[1].value <= 0) {
    outputEl.innerText = "Enter Valid Data❌";
  }
  if (angles[2].value <= 0) {
    outputEl.innerText = "Enter Valid Data❌";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
