'use strict';

// selects elements using different id
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Hides the dice element at the beginning of the game
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// console.log(score0El);
// console.log(score1El);

// keeps track of whether continuing the game
let playing;
// keeps track of current active player
let activePlayer;
// keeps track of score for current active player
let currentScore;
// keeps track of scores for both players as an array
const scores = [0, 0];

const init = function () {
  // Initial settings
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  playing = true;
  activePlayer = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // reset before the switch
  currentScore = 0;
  // Switch to another player, and reset currentScore
  activePlayer = activePlayer === 0 ? 1 : 0;
  // if there is there, then remove; if there is not there, then add
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice according to dice number
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      // current0El.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >=100
    // Finish the game or switch to another player
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

init();
