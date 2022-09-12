var quizForm = document.querySelector(".quiz-container");
var submitAnswerBtn = document.querySelector("#submit-answers");
var outputEl = document.querySelector("#output");

var correctAnswers = [
  "right-angled",
  "obtuse",
  "acute",
  "60°",
  "Equilateral triangle",
];

function calculateScore() {
  let score = 0;
  let index = 0;
  var formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
    outputEl.innerText = "Your score is " + score + " !";
  }
}

submitAnswerBtn.addEventListener("click", calculateScore);
