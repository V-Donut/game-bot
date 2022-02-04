'use strict';

const getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && num.toString().indexOf(' ') === -1;
};

function startGame() {
  let randomNumber = getRandomInRange(1, 100);
  let attempts = 10;

  function gameOver(text) {
    let continueGame = confirm(text);
      if (continueGame) {
        return startGame();
      } 
      alert('Игра окончена');
      return;
  }

  function askNumber(question) {
    if (attempts === 0) {
      return gameOver('Попытки закончились, хотите сыграть еще?');
    }

    let userNumber = prompt(question);

    if (userNumber === null) {
      alert('Игра окончена');
      return;
    }

    if (!isNumber(userNumber)) {
      return askNumber('Введи число!');
    }

    userNumber = parseInt(userNumber);
    attempts--;

    if (randomNumber === userNumber) {
      return gameOver('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
    } else if (randomNumber > userNumber) {
      return askNumber('Загаданное число больше, осталось попыток ' + attempts);
    } else {
      return askNumber('Загаданное число меньше, осталось попыток ' + attempts);
    }
  }

  askNumber('Угадай число от 1 до 100');
}

startGame();
