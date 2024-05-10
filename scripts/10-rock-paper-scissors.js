let score = JSON.parse(localStorage.getItem("score"));

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You Loose";
    } else if (computerMove === "scissors") {
      result = "You Win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You Loose";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Loose";
    } else if (computerMove === "paper") {
      result = "You Win";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  }

  //saving the results
  if (result === "You Win") {
    score.wins++;
  } else if (result === "You Loose") {
    score.losses++;
  } else if (result === "Tie") {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = `${result}`;

  document.querySelector(
    ".js-move"
  ).innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="" class="move-icon" />
      <img src="images/${computerMove}-emoji.png"  alt="" class="move-icon" /> Computer`;
  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Looses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
