const questions = [
  {
    question: " What is the full form of CSS?",
    answers: [
      { text: "Casecading Styles Sheet", correct: false },
      { text: " Cascading Style Sheets", correct: true },
      { text: "Casacoding Style Sheets", correct: false },
      { text: " None of the Above", correct: false },
    ],
  },
  {
    question: " How many types of CSS?",
    answers: [
      { text: "1", correct: false },
      { text: " 2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
    ],
  },
  {
    question: "  HTML stands for ________.",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: " Hyper Text Makeup Language ", correct: false },
      { text: "None of these", correct: false },
      { text: " Hyper Tech Markup Language", correct: false },
    ],
  },
  {
    question: " Which of the following is valid colour code ?",
    answers: [
      { text: "#000000;", correct: true },
      { text: "#0000000;", correct: false },
      { text: "#00000000;", correct: false },
      { text: " #000000000;", correct: false },
    ],
  },
  {
    question: " DOM stands for",
    answers: [
      { text: " Data object model", correct: false },
      { text: " Document object model", correct: true },
      { text: " Document Oriented model", correct: false },
      { text: " Data oriented model", correct: false },
    ],
  },
  {
    question: " Which of the following are attributes of Font Tag ?",
    answers: [
      { text: " Face", correct: false },
      { text: " Size", correct: true },
      { text: " Color", correct: false },
      { text: " None of the Above", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const replaceButton=document.getElementById("replace");

let currentQuestionIndex = 0;
let score = 0;

/* ---------------------------------- start --------------------------------- */

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "next";
  showQuestion();
  timer(); //settimeout
}

/* ---------------------------------- timer --------------------------------- */

function timer(){
    var count = 10;
var interval = setInterval(function () {
  document.getElementById("timer").innerHTML = count;
  count--;
  if (count === -1) {
    clearInterval(interval);
    alert("You're out of time!");
    // startQuiz();
    exit();
  }
}, 1000);
}

/* ------------------------------ question-show ----------------------------- */
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

/* ---------------------------------- reset --------------------------------- */
function resetState() {
  nextButton.style.display = "none";
  replaceButton.style.display="none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
    
  }
}

/* -------------------------------- selectans ------------------------------- */

function selectAnswer(e) {
  const selectedbtn = e.target;
  const isCorrect = selectedbtn.dataset.correct === "true";
  if (isCorrect) {
    selectedbtn.classList.add("correct");
    score++;
  } else {
    selectedbtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";

}

/* ---------------------------------- show ---------------------------------- */
function showScore() {
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "play again!!";
  nextButton.style.display = "block";
}

/* ---------------------------------- exit ---------------------------------- */
function exit() {
resetState();
questionElement.innerHTML="thank you";
replaceButton.innerHTML="start quiz";
replaceButton.style.display = "block";
}

function handleReplace() {
    currentQuestionIndex[0];
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  replaceButton.addEventListener("click", () => {
    if (currentQuestionIndex[0] < questions.length) {
      handleReplace();
    } else {
      startQuiz();
    }
  });
/* ---------------------------------- next ---------------------------------- */
function handleNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNext();
  } else {
    startQuiz();
  }
});
startQuiz();
