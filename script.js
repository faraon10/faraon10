function countCards() {
    var cardsInput = document.getElementById("cards").value;
    var cards = cardsInput.split(",");
    var count = 0;
    for (var i = 0; i < cards.length; i++) {
      var card = parseInt(cards[i]);
      if (card >= 1 && card <= 5) {
        count++;
      } else if (card == 10 || card == 11) {
        count--;
      }
    }
    var countDisplay = document.getElementById("count");
    countDisplay.innerHTML = count;
  }
  