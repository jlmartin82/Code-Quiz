// script.js
const startButton = document.getElementById('start-button');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const submitButton = document.getElementById('submit-score');
const initialsInput = document.getElementById('initials');
const finalScore = document.getElementById('final-score');

let currentQuestionIndex = 0;
let timeLeft = 60;

const questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hypertext Markup Language",
      "Hyper Technology Modern Language",
      "Home Tool Markup Language",
      "Hyperlink and Text Markup Language"
    ],
    correctAnswer: "Hypertext Markup Language"
  },
  // Add more questions here
];

function startQuiz() {
  startButton.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  displayQuestion(currentQuestionIndex);
  startTimer();
}

function displayQuestion(index) {
  const question = questions[index];
  const questionElement = document.querySelector('#quiz-screen h2');
  const choices = document.querySelectorAll('.choice');

  questionElement.textContent = `Question ${index + 1}: ${question.question}`;

  choices.forEach((choice, i) => {
    choice.textContent = question.choices[i];
    choice.addEventListener('click', () => checkAnswer(choice, question.correctAnswer));
  });
}

function checkAnswer(selectedChoice, correctAnswer) {
  if (selectedChoice.textContent === correctAnswer) {
    // Handle correct answer
  } else {
    // Handle incorrect answer
    timeLeft -= 10; // Subtract time for incorrect answer
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    endQuiz();
  }
}

function startTimer() {
  const timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  quizScreen.classList.add('hidden');
  endScreen.classList.remove('hidden');
  finalScore.textContent = timeLeft;
  submitButton.addEventListener('click', saveScore);
}

function saveScore() {
  const initials = initialsInput.value;
  // Save initials and score, e.g., using localStorage or an API
}

startButton.addEventListener('click', startQuiz);
