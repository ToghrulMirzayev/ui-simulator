document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("startBtn");
  const playBtn = document.getElementById("playBtn");
  const backConfigBtn = document.getElementById("backConfigBtn");

  startBtn.addEventListener("click", startGame);
  playBtn.addEventListener("click", checkGuess);
  backConfigBtn.addEventListener("click", backToConfig);
});

let originalHeaderText;

function displayConfigError(message) {
  const errorConfigMessage = document.getElementById("errorConfigMessage");
  errorConfigMessage.innerText = message;
  errorConfigMessage.style.display = "block";
}

function displayGameError(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.innerText = message;
  errorMessage.style.display = "block";
}

function backToConfig() {
  const maxNumberInput = document.getElementById("maxNumber");
  const maxAttemptsInput = document.getElementById("maxAttempts");
  const guessInput = document.getElementById("guess");
  const startText = document.querySelector(".container h3");

  const gameConfig = document.getElementById("gameConfig");
  const gameArea = document.getElementById("gameArea");
  const errorMessage = document.getElementById("errorMessage");
  const errorConfigMessage = document.getElementById("errorConfigMessage");

  maxNumberInput.value = "";
  maxAttemptsInput.value = "";
  guessInput.value = "";

  document.getElementById("resultMessage").innerText = "";
  document.getElementById("attemptsMessage").innerText = "";
  attempts = 0;

  errorMessage.style.display = "none";
  errorConfigMessage.style.display = "none";

  gameConfig.style.display = "block";
  gameArea.style.display = "none";

  startText.innerHTML = originalHeaderText;
}

function startGame() {
  const maxNumberInput = document.getElementById("maxNumber");
  const maxAttemptsInput = document.getElementById("maxAttempts");
  const startText = document.querySelector(".container h3");

  const maxNumber = parseInt(maxNumberInput.value);
  maxAttempts = parseInt(maxAttemptsInput.value);

  const errorConfigMessage = document.getElementById("errorConfigMessage");

  if (isNaN(maxNumber) || isNaN(maxAttempts) || maxNumber <= 0 || maxAttempts <= 0) {
    displayConfigError("Please enter valid configurations");
    return;
  }

  errorConfigMessage.style.display = "none";

  secretNumber = Math.floor(Math.random() * (maxNumber + 1));
  attempts = 0;

  const gameConfig = document.getElementById("gameConfig");
  const gameArea = document.getElementById("gameArea");

  gameConfig.style.display = "none";
  gameArea.style.display = "block";

  originalHeaderText = startText.innerHTML;

  startText.innerHTML = `<span class="colored-text">Rules:</span> Secret number is hidden. Guess it. You have ${maxAttempts} attempts`;
}

function checkGuess() {
  const guessInput = document.getElementById("guess");
  const errorMessage = document.getElementById("errorMessage");

  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 0) {
    displayGameError("Please enter a valid guess number");
    return false;
  }

  errorMessage.style.display = "none";

  attempts++;

  if (guess === secretNumber) {
    document.getElementById("resultMessage").innerText = `Congratulations! You guessed the secret number -> ${secretNumber}`;
    document.getElementById("attemptsMessage").innerText = `It took you ${attempts} attempts`;
  } else if (attempts >= maxAttempts) {
    document.getElementById("resultMessage").innerText = `Game over! You ran out of attempts`;
    document.getElementById("attemptsMessage").innerText = `The secret number was ${secretNumber}`;
  } else {
    const hint = guess < secretNumber ? "higher" : "lower";
    document.getElementById("resultMessage").innerText = `Try again! Guess ${hint}`;
    document.getElementById("attemptsMessage").innerText = `Attempts: ${attempts}/${maxAttempts}`;
  }
}
