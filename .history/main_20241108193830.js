// Roll for Player 1
const randNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randNumber1); // Log Player 1's dice roll

const diceNumber1 = `dice${randNumber1}.png`; // Create image file name for Player 1
console.log(diceNumber1); // Log the dice image file name for Player 1

const diceImage1 = `images/${diceNumber1}`; // Full path to image for Player 1
console.log(diceImage1); // Log the full path

const image1 = document.querySelector(".img1"); // Select Player 1's image element
image1.setAttribute("src", diceImage1); // Set the src attribute to the dice image

// Roll for Player 2
const randNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randNumber2); // Log Player 2's dice roll

const diceNumber2 = `dice${randNumber2}.png`; // Create image file name for Player 2
console.log(diceNumber2); // Log the dice image file name for Player 2

const diceImage2 = `images/${diceNumber2}`; // Full path to image for Player 2
console.log(diceImage2); // Log the full path

const image2 = document.querySelector(".img2"); // Select Player 2's image element
image2.setAttribute("src", diceImage2); // Set the src attribute to the dice image

// Determine the winner
if (randNumber1 > randNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 won!!❤❤";
} else if (randNumber2 > randNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 won!!❤❤";
} else {
  document.querySelector("h1").innerHTML = "Tie";
}
