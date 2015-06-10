var getRandomBoardgame = require('./random/boardgame');

var display = document.getElementById('outputDisplay');
display.innerHTML = getRandomBoardgame();
