let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const attemptsText = document.getElementById('attempts');
const resetButton = document.getElementById('resetButton');

// Function to handle the guess
submitGuess.onclick = function() {
    const userGuess = Number(guessInput.value);

    if (userGuess === secretNumber) {
        feedback.textContent = `Correct! You guessed it in ${++attempts} attempts.`;
        feedback.style.color = 'green';
        submitGuess.disabled = true;
        resetButton.style.display = 'block';
    } else {
        feedback.textContent = userGuess < secretNumber ? "Too low! Try again." : "Too high! Try again.";
        feedback.style.color = 'orange';
        attemptsText.textContent = `Attempts: ${++attempts}`;
    }
};

// Reset the game
resetButton.onclick = function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = '';
    feedback.textContent = '';
    attemptsText.textContent = 'Attempts: 0';
    submitGuess.disabled = false;
    resetButton.style.display = 'none';
};
