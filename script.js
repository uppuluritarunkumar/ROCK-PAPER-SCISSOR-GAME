let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePoints = document.querySelector("#user-score");
const computerScorePoints = document.querySelector("#computer-score");

const getComputerChoice = () => {
  const computerChoices = ["rock", "paper", "scissors"];
  const computerRandomIndex = Math.floor(Math.random() * 3);
  const computerChoice = computerChoices[computerRandomIndex];
  console.log("Computer choice:", computerChoice);
  return computerChoice;
};

checkDraw = (userChoice, computerChoice) => {
  if (userChoice == computerChoice) {
    console.log("Its a draw");
    msg.style.backgroundColor = "";
    msg.innerText = "Its a Draw, Play again !";
    return true;
  } else {
    return false;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log("choice was clicked");
    const userChoice = choice.getAttribute("id");
    console.log("you choice :", userChoice);
    const computerChoice = getComputerChoice();

    if (userChoice == "rock") {
      // computer have the options of paper and scissor
      if (computerChoice == "scissors" && computerChoice != "rock") {
        console.log("you wins"); // for better understanding on console window
        msg.innerText = "You win, Lets go :)";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePoints.innerText = userScore;
      }
      if (computerChoice == "paper" && computerChoice != "rock") {
        console.log("computer wins"); // for better understanding on console window
        msg.innerText = "Computer wins :(";
        msg.style.backgroundColor = "red";
        computerScore++;
        computerScorePoints.innerText = computerScore;
      }
    }

    if (userChoice == "paper") {
      // computer have the options of rock and scissor
      if (computerChoice == "rock" && computerChoice != "paper") {
        console.log("you wins"); // for better understanding on console window
        msg.innerText = "You wins :)";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePoints.innerText = userScore;
      }
      if (computerChoice == "scissors" && computerChoice != "paper") {
        console.log("computer wins"); // for better understanding on console window
        msg.innerText = "Computer wins :(";
        msg.style.backgroundColor = "red";
        computerScore++;
        computerScorePoints.innerText = computerScore;
      }
    }

    if (userChoice == "scissors") {
      // computer have the options of rock and paper
      if (computerChoice == "paper" && computerChoice != "scissors") {
        console.log("you wins"); // for better understanding on console window
        msg.innerText = "You wins :)";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePoints.innerText = userScore;
      }
      if (computerChoice == "rock" && computerChoice != "scissors") {
        console.log("computer wins"); // for better understanding on console window
        msg.innerText = "Computer wins :(";
        msg.style.backgroundColor = "red";
        computerScore++;
        computerScorePoints.innerText = computerScore;
      }
    }
    checkDraw(userChoice, computerChoice);
  });
});
