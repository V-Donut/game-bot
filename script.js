'use strict';

const getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && num.toString().indexOf(' ') === -1;
};

function startGame() {
  let randomNumber = getRandomInRange(1, 100);

  function askNumber(question) {
    let userNumber = prompt(question);

    if (userNumber === null) {
      alert('Игра окончена');
      return;
    }

    if (!isNumber(userNumber)) {
      return askNumber('Введи число!');
    }

    userNumber = parseInt(userNumber);

    if (randomNumber === userNumber) {
      alert('Поздравляю, Вы угадали!!!');
      return;
    } else if (randomNumber > userNumber) {
      return askNumber('Загаданное число больше');
    } else {
      return askNumber('Загаданное число меньше');
    }
  }

  askNumber('Угадай число от 1 до 100');
}

startGame();
