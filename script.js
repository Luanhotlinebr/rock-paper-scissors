//Criar score do playerm e computador
let playerChoice = "";
let computerChoice = "";

//Function start playing game
//choice number é math random * 3, computer choice sera baseado nesse math random
const playerBtnOpt = document.querySelectorAll('button[name="action"]');

let cpuOptions = ["rock", "paper", "scissor"];

const cpuChoice = cpuOptions[Math.trunc(Math.random() * 3)];

console.log("Escolha da CPU: ", cpuChoice);

playerBtnOpt.forEach((botao) =>
  botao.addEventListener("click", (e) => {
    let playerChoice = e.target.value;
    // let playerOption = e.target.textContent;
    console.log("Escolha do player:", playerChoice);

    if (cpuChoice === "scissor") {
      if (playerChoice === "rock") {
        console.log("Win");
      } else if (playerChoice === "paper") {
        console.log("Lose");
      } else {
        console.log("Draw");
      }
    }

    if (cpuChoice === "rock") {
      if (playerChoice === "paper") {
        console.log("Win");
      } else if (playerChoice === "scissor") {
        console.log("Lose");
      } else {
        console.log("Draw");
      }
    }

    if (cpuChoice === "paper") {
      if (playerChoice === "scissor") {
        console.log("Win");
      } else if (playerChoice === "rock") {
        console.log("You lose");
      } else {
        console.log("Draw");
      }
    }
  })
);
