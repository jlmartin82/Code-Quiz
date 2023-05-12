// Get elements from the HTML document
const startButton = document.querySelector('.quiz-intro button');
const questionsScreen = document.querySelector('.questions-screen');
const quizFinishScreen = document.querySelector('.quiz-finish-screen');
const highscoresScreen = document.querySelector('.highscores-screen');
const scoreDisplay = document.querySelector('.quiz-finish-screen p');
const initialsInput = document.querySelector('.quiz-finish-screen input');
const submitButton = document.querySelector('.quiz-finish-screen button');
const timerDisplay = document.querySelector('.top-bar p');

// Quiz questions and answers
const quizQuestions = [
  {
    question: 'Commonly Used data types DO NOT include',
    answers: ["stings", "alerts", "booleans", "numbers"],
    correctAnswer:"alerts"
  },
  {
    question: "The condition in an if / else statment is enclosed within _____.",
    answers: ["parentheses", "quotes", "curly brackets", "square brackets"],
    correctAnswer: "parentheses"
  },
  {
    question:"What javascipt method can we use to select an html element?",
    answers:["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"],    
	correctAnswer: "Both 1 and 3"
  }
];

// Global variables
let currentQuestionIndex = 0;
let timeLeft = 60;

// Functions for handling the quiz
function startQuiz() {
  startTimer();
  showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
  const currentQuestion = quizQuestions[index];
  const questionText = currentQuestion.question;
  const answerButtons = questionsScreen.querySelectorAll('button');
  
  // Display the question and answers
  questionsScreen.querySelector('h2').textContent = questionText;
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = currentQuestion.answers[i];
  }

  // Attach click event listeners to answer buttons
  answerButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      if (i === currentQuestion.correctAnswer) {
        scoreDisplay.textContent = `Your Score: ${timeLeft}`;
        showQuizFinishScreen();
      } else {
        timeLeft -= 10;
        if (timeLeft <= 0) {
          scoreDisplay.textContent = `Your Score: 0`;
          showQuizFinishScreen();
        } else {
          showQuestion(currentQuestionIndex++);
        }
      }
    });
  });
}

function showQuizFinishScreen() {
  clearInterval(timerInterval);
  questionsScreen.style.display = 'none';
  quizFinishScreen.style.display = 'block';
}

function submitScore() {
  const initials = initialsInput.value.trim();
  if (initials) {
    const highscoresList = highscoresScreen.querySelector('ol');
    const newScore = document.createElement('li');
    newScore.textContent = `${initials} - ${timeLeft}`;
    highscoresList.appendChild(newScore);
    showHighscoresScreen();
  }
}

function showHighscoresScreen() {
  quizFinishScreen.style.display = 'none';
  highscoresScreen.style.display = 'block';
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      scoreDisplay.textContent = `Your Score: 0`;
      showQuizFinishScreen();
    } else {
      const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
      const seconds = (timeLeft % 60).toString().padStart(2, '0');
      timerDisplay.textContent = `Timer: ${minutes}:${seconds}`;
    }
  }, 1000);
}

// Attach event listeners to buttons
startButton.addEventListener('click' startQuiz() {
}
