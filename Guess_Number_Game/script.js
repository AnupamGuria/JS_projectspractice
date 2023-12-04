'use strict';

let correctNumber = Math.trunc(Math.random() * 20 + 1);
let attemptLeft = 30,
  currentScore = 0,
  timeLeft = 30;

//Time counter
let interval = setInterval(() => {
  timeLeft--;
  if (timeLeft == 0 || attemptLeft <= 0) {
    clearInterval(interval);
    alert('Game Over!');
    document.querySelector('.check').disabled = true;
  }
  document.querySelector('.time').textContent = timeLeft;
}, 1000);

//display message on message class
const getMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

//get the left attempt
const getAttemptLeft = function () {
  attemptLeft--;
  document.querySelector('.attempt').textContent = attemptLeft;
};

//After the correct guess reset the variable for next guess
function nextGuess() {
  timeLeft += 23;
  correctNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  getMessage('Start guessing...');
}

//whole game logic
document.querySelector('.check').addEventListener('click', function () {
  let guessValue = document.querySelector('.guess').value;
  console.log(correctNumber);

  //when no input given
  if (!guessValue) {
    getAttemptLeft();
    getMessage('🚫 Not a number');
  }
  //Correct input
  else if (guessValue == correctNumber) {
    getAttemptLeft();
    document.querySelector('body').style.backgroundColor = '#5bf584';
    document.querySelector('.number').textContent = correctNumber;
    getMessage('☑️guess is correct');
    currentScore += 5;
    document.querySelector('.score').textContent = currentScore;
    setTimeout(() => {
      nextGuess();
    }, 1000);
  }
  //Incorrect input given
  else {
    guessValue < correctNumber
      ? getMessage('📉guess is too low')
      : getMessage('📈guess is too high');
    getAttemptLeft();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
