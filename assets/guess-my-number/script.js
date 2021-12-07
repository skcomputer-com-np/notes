'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let newScore = 20;
let body = document.querySelector('body');
let score = document.querySelector('.score');

//Register event listener
document.querySelector('.check').addEventListener('click', game);
document.querySelector('.again').addEventListener('click', newGame);

//set message
const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

function game() {
  const guess = Number(document.querySelector('.guess').value);
  let msg = document.querySelector('.message');

  //when no number inputed
  if (!guess) {
    msg.textContent = '⛔ No number!';

    //when game won
  } else if (guess === secretNumber) {
    let highScore = document.querySelector('.highscore');
    if (guess === secretNumber) {
      msg.textContent = '🎉 Correct Number!';
      body.style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.check').disabled = true;
      document.querySelector('.check').classList.remove('check:hover');

      let highScoreNumber = Number(highScore.textContent);
      if (highScoreNumber < newScore) {
        highScore.textContent = newScore;
      }
    }

    //when guess number is high or low
  } else {
    if (newScore > 1) {
      displayMsg(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score.textContent = --newScore;
    } else {
      displayMsg('🔥 You lost the game!');
      score.textContent = 0;
    }
  }
}

// function game() {
//   const guess = Number(document.querySelector('.guess').value);
//   let msg = document.querySelector('.message');
//   //when no number inputed
//   if (!guess) {
//     msg.textContent = '⛔ No number!';

//     //when guess number is high
//   } else if (guess > secretNumber) {
//     if (newScore > 1) {
//       msg.textContent = '📉 Too high!';
//       score.textContent = --newScore;
//     } else {
//       msg.textContent = '🔥 You lost the game!';
//       score.textContent = 0;
//     }

//     //When guess number is low
//   } else if (guess < secretNumber) {
//     if (newScore > 1) {
//       msg.textContent = '📉 Too low!';
//       score.textContent = --newScore;
//     } else {
//       msg.textContent = '🔥 You lost the game!';
//       score.textContent = 0;
//     }

//     //when you win
//   } else if (guess === secretNumber) {
//     let highScore = document.querySelector('.highscore');
//     if (guess === secretNumber) {
//       msg.textContent = '🎉 Correct Number!';
//       body.style.backgroundColor = '#60b347';
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('.number').style.width = '30rem';
//       document.querySelector('.check').disabled = true;

//       let highScoreNumber = Number(highScore.textContent);
//       if (highScoreNumber < newScore) {
//         highScore.textContent = newScore;
//       }
//     }
//   }
// }

function newGame() {
  newScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  displayMsg('Start guessing...');
  body.style.backgroundColor = '#222';
  score.textContent = newScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
}
