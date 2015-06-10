var getRandomFood = require('./random/food');

var display = document.getElementById('outputDisplay');
display.innerHTML = getRandomFood();
