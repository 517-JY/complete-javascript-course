'use strict';

/**
 * the DOM and DOM methods are actually part of something called the web APIs.
 */

// get
console.log(document.querySelector('.message').textContent);

// set
// document.querySelector('.message').textContent = '🎉 Correct secretNumber!';

// generate random integer between [1, 20]
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// get value of input type using the value property
document.querySelector('.guess').value = null;
//console.log(document.querySelector('.guess').value);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Do something when clicks the check button
// the second function parameter is an event handler
// and the function will be called as soon as the event happen

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ Not a valid number');
  } else if (guess === secretNumber) {
    // when player wins
    displayMessage('🎉 Correct Number!');
    document.querySelector('.score').textContent = score;
    // changes the css style accordingly
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    // when guess is too high
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    } else {
      displayMessage('😭 You lost the game!');
    }
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// Click 'Again' button to restart the game
document.querySelector('.again').addEventListener('click', function () {
  // get value of input type using the value property
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
