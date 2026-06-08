const computerOutput = document.querySelector("#computer")
const humanOutput = document.querySelector("#human")
const resultOutput = document.querySelector("#result")

const playerScoreOutput = document.querySelector("#playerScore")
const computerScoreOutput = document.querySelector("#computerScore")

const roundOutput = document.querySelector("#round")
const streakOutput = document.querySelector("#streak")

const buttons = document.querySelectorAll("button")

let humanChoice
let computerChoice

let playerScore = 0
let computerScore = 0

let round = 0
let streak = 0

// player clicks a button
buttons.forEach(function(button){

    button.addEventListener("click", function(event){

        playGame(event.target.id)

    })

})

// main game function
function playGame(choice){

    humanChoice = choice

    humanOutput.innerHTML = humanChoice

    round++

    roundOutput.innerHTML = round

    generateComputerChoice()

    determineWinner()

}

// generate random computer choice
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

// determine the winner
function determineWinner(){

    if(humanChoice == computerChoice){

        resultOutput.innerHTML = "Gelijkspel"

        resultOutput.style.color = "white"

    }

    else if(
        humanChoice == "steen" && computerChoice == "schaar" ||
        humanChoice == "papier" && computerChoice == "steen" ||
        humanChoice == "schaar" && computerChoice == "papier"
    ){

        resultOutput.innerHTML = "Jij wint"

        resultOutput.style.color = "lightgreen"

        playerScore++
        streak++

        playerScoreOutput.innerHTML = playerScore
        streakOutput.innerHTML = streak

    }

    else{

        resultOutput.innerHTML = "Computer wint"

        resultOutput.style.color = "tomato"

        computerScore++
        streak = 0

        computerScoreOutput.innerHTML = computerScore
        streakOutput.innerHTML = streak

    }

}