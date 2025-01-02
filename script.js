document.querySelector(".roll-button").addEventListener("click", function () {
    // Dice 1
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomDiceImageSource = "images/dice" + randomNumber + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageSource);
  
    // Dice 2
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);
  
    // Result
    if (randomNumber > randomNumber2) {
      document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber) {
      document.querySelector("h1").innerHTML = "&#128681 Player 2 Wins!";
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
  });