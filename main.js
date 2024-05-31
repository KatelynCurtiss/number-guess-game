// Katelyn Curtiss
// 31 May 2024
// JS Number Guess Game 

let  randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses"); 
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton; 

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses:"; 
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`; 

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congragulations! You guessed the mystery number!";
        lastResult.computedStyleMap.backgorundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else if (guessCount === 10) {
        lastResult.textContent = "!!!Game Over!!!";
        lowOrHi.textContent = ""; 
        setGameOver(); 
    } else {
        lastResult.textContent = "Wrong!"; 
        lastResult.style.backgorundColor = "red";
        if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too low!";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high!";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus(); 
}

