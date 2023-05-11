
// variables 
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#startButton");
var submitBtn = document.querySelector("#submit-button");
var titleScreen = document.querySelector("#title-section");
var quizScreen = document.querySelector("#quiz-section");
var highScoreScreen = document.querySelector("#highscore-section");
var highScoreDisplay = document.querySelector("#highscore-display-section");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");

// functions
function startQuiz() {
  // hide start screen
  titleScreen.setAttribute("class", "hide");
  
  // un-hide questions 
  quizScreen.setAttribute("class", "show");
  
  // start timer
  timerId = setInterval(tick, 1000);
  
  // starting time
  timeEl.textContent = time;
  
  getQuestion();
}

// create a second taken off of a clock
function tick() {
  // update time
  time--;
  timeEl.textContent = time;
  
  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];
  
  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  
  // clear out any old question choices
  choicesEl.innerHTML = "";
  
  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
  
    choiceNode.textContent = i + 1 + ". " + choice;
  
    // attach click event listener to each choice
    choiceNode.onclick = questionClick;
  
    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}

// click on question answer either generate new question or end quiz if final question, and deduct time for answering wrong
function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 15;
  
    if (time < 0) {
      time = 0;
    }
  
    // display new time on page
    timeEl.textContent = time;
  
    feedbackEl.textContent = "Wrong!";
  } else {
    feedbackEl.textContent = "Correct!";
  }
  
  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);
  
  // move to next question
  currentQuestionIndex++;
  
  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

// end the quiz function
function quizEnd() {
  // stop timer
  clearInterval(timerId);
  
  // show end screen
  var highscoreSectionEl = document.querySelector("#highscore-section");
  highscoreSectionEl.setAttribute("class", "show");
  
  // show final score
  var finalScoreEl = document.querySelector("#final-score");
}