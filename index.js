var myRandom1 = Math.floor(Math.random() * 6) + 1;

diceImage1 = "images/dice" + myRandom1 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", diceImage1)

var myRandom2 = Math.floor(Math.random() * 6) + 1

diceImage2 = "images/dice" + myRandom2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", diceImage2)


if (myRandom1 > myRandom2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if (myRandom2 > myRandom1) {
    document.querySelector("h1").innerHTML = "player 2 Wins";
}

else {
    document.querySelector("h1").innerHTML = "DRAW!";
}

