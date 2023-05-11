//
var currentQuestionIndex =0;
var time =question.length * 15;
var timerId; 

//
var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#start-button");
var submitBtn = document.querySelector("#submit-button");
var titleScreen = document.querySelector("#title-section");
var quizScreen = document.querySelector("#quiz-section");
var highScoreScreen = document.querySelector("#highscore-section");
var highScoreDisplay = document.querySelector("#highscore-display-section");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");

var questionsEl = document.quearySelector("#questions");
var choicesEl = document.quesrySelector("choices");


//
function startQuiz() {
    //hide 
    titleScreen.setAttribute("class", "hide");
    //unhide
    quizScreen.setAttribute("class", "shoe");
    //timer
    timerID =setInterval(tick, 1000);
    //show timer
    timeEl.textConent = time;

    getQuestion();
}

