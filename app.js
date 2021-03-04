/*
GAME FUNCTION:
-Player must guess a number between a min and SVGFEColorMatrixElement
- Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if he looses
-Let player choose to play again
*/
//Game Values

let min = 1,
  max = 10,
  winningNum = 2; //Math.ceil(Math.random() * 5);
guessesLeft = 3;

//UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play agin  event listener
game;

//Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value); // without 'parseInt, the guess input value will pass off as a string rather than a number

  //Validating our input with a conditional
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(` Please enter a number between ${min} and ${max}`, "red");
  } else {
    //check if won
    if (guess === winningNum) {
      gameOver(true, `${winningNum} is correct, YOU WIN!`);
    } else {
      //wrong number
      guessesLeft -= 1;

      if (guessesLeft === 0) {
        // Game Over - lost
        // disable input
        guessInput.disabled = true;
        //Change border color
        guessInput.style.borderColor = "red";
        ///set message
        setMessage(
          `Game over, you lost. The correct number was ${winningNum}`,
          "red"
        );
        // gameover(
        //   false,
        //   `Game over, you lost. The correct number was ${winningNum}`
        // );
      } else {
        // Game continues - answer wrong
        // Change border color
        guessInput.style.borderColor = "red";
        //clear input
        guessInput.value = "";
        //tel user answer is wrong
        setMessage(
          `${guess} is not correct, ${guessesLeft} guesses left`,
          "red"
        );
      }
    }
  }
});
//Game Over-function
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  //disable input
  guessInput.disabled = true;
  //Change border color
  guessInput.style.borderColor = color;
  //set text color
  message.style.color = color;
  ///set message
  setMessage(msg);

  //play again?
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}
//set message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
