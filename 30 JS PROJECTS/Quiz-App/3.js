const questions = [
  {
    Question:
      "The minimum number of times a do loop would definitely get executed is",
    Answer: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
    ],
  },

  {
    Question:
      "The variables that can be used only within the function in which it is declared is called as",
    Answer: [
      { text: "Global Variable", correct: false },
      { text: "local Variable", correct: true },
      { text: "both", correct: false },
      { text: "None", correct: false },
    ],
  },

  {
    Question: "How many values can be returned by a C++ function?",
    Answer: [
      { text: "1", correct: true },
      { text: "0", correct: false },
      { text: "infinity", correct: false },
      { text: "none", correct: false },
    ],
  },

  {
    Question:
      "The variable that contains address of another variable is called as",
    Answer: [
      { text: "array", correct: false },
      { text: "union", correct: false },
      { text: "pointer", correct: true },
      { text: "index", correct: false },
    ],
  },

  {
    Question:
      "What notation is used to represent destructors in the C++ program? ",
    Answer: [
      { text: "!", correct: false },
      { text: "=", correct: false },
      { text: "x", correct: false },
      { text: "~", correct: true },
    ],
  },
];
const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.Question;

  currentQuestion.Answer.forEach((answer) => {
    const buttons = document.createElement("button");
    buttons.innerHTML = answer.text;
    buttons.classList.add("btn");
    answerButton.appendChild(buttons);
    if (answer.correct) {
      buttons.dataset.correct = answer.correct;
    }
    buttons.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach((buttons) => {
    if (buttons.dataset.correct === "true") {
      buttons.classList.add("correct");
    }
    buttons.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;

  nextButton.innerHTML = "Play Again !";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

startQuiz();
