// highscore.js

// Get elements from the HTML document
const highscoresList = document.getElementById('highscores-list');
const clearButton = document.getElementById('clear-btn');
const goBackButton = document.getElementById('go-back-btn');

// Retrieve high scores from localStorage and display them
function displayHighScores() {
  const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

  highscoresList.innerHTML = highscores.map(score => `<li>${score.initials} - ${score.score}</li>`).join('');
}

// Clear high scores from localStorage and update the display
function clearHighScores() {
  localStorage.removeItem('highscores');
  highscoresList.innerHTML = '';
}

// Event listeners
clearButton.addEventListener('click', clearHighScores);
goBackButton.addEventListener('click', () => {
  window.location.href = './index.html'; // Change to the path of your main quiz HTML file
});

// Call the function to display high scores when the page loads
displayHighScores();
