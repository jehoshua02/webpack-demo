function getRandomBoardgame() {
  var boardgames = [
    'Roads and Boats',
    'Tales of Arabian Nights',
    'Dominion',
    'Agricola'
  ];

  var randomNum = getRandomNumber(0, boardgames.length - 1);
  return boardgames[randomNum];
}
