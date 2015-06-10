var getRandomNumber = require('lodash/number').random;

function getRandomFood() {
  var foods = [
    'Banana',
    'Apple',
    'Orange'
  ];

  var randomNum = getRandomNumber(0, foods.length - 1);
  return foods[randomNum];
}

module.exports = getRandomFood;
