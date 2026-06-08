const computerOutput = document.querySelector("#computer")
const humanOutput = document.querySelector("#human")
const resultOutput = document.querySelector("#result")

const playerScoreOutput = document.querySelector("#playerScore")
const computerScoreOutput = document.querySelector("#computerScore")

const buttons = document.querySelectorAll("button")

let humanChoice
let computerChoice

let playerScore = 0
let computerScore = 0

// speler klikt op een knop
buttons.forEach(function(button){

    button.addEventListener("click", function(event){

        playGame(event.target.id)

    })

})

// hoofd functie van het spel
function playGame(choice){

    humanChoice = choice

    humanOutput.innerHTML = humanChoice

    generateComputerChoice()

    determineWinner()

}

// computer kiest willekeurig
function generateComputerChoice(){

    let randomNumber = Math.floor(Math.random() * 3) + 1

    switch(randomNumber){

        case 1:
            computerChoice = "steen"
            break

        case 2:
            computerChoice = "papier"
            break

        case 3:
            computerChoice = "schaar"
            break

    }

    computerOutput.innerHTML = computerChoice

}

// winnaar bepalen
function determineWinner(){

    if(humanChoice == computerChoice){

        resultOutput.innerHTML = "Gelijkspel"

    }

    else if(
        humanChoice == "steen" && computerChoice == "schaar" ||
        humanChoice == "papier" && computerChoice == "steen" ||
        humanChoice == "schaar" && computerChoice == "papier"
    ){

        resultOutput.innerHTML = "Jij wint"

        playerScore++

        playerScoreOutput.innerHTML = playerScore

    }

    else{

        resultOutput.innerHTML = "Computer wint"

        computerScore++

        computerScoreOutput.innerHTML = computerScore

    }

}