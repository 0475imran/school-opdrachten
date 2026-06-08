const computerOutput = document.querySelector("#computer")
const humanOutput = document.querySelector("#human")
const resultOutput = document.querySelector("#result")

const steenBtn = document.querySelector("#steen")
const papierBtn = document.querySelector("#papier")
const schaarBtn = document.querySelector("#schaar")

let humanChoice
let computerChoice

steenBtn.addEventListener("click", function(event){

    humanChoice = event.target.id

    humanOutput.innerHTML = humanChoice

    generateComputerChoice()

    determineWinner()

})

papierBtn.addEventListener("click", function(event){

    humanChoice = event.target.id

    humanOutput.innerHTML = humanChoice

    generateComputerChoice()

    determineWinner()

})

schaarBtn.addEventListener("click", function(event){

    humanChoice = event.target.id

    humanOutput.innerHTML = humanChoice

    generateComputerChoice()

    determineWinner()

})

function generateComputerChoice(){

    let randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber == 1){
        computerChoice = "steen"
    }

    if(randomNumber == 2){
        computerChoice = "papier"
    }

    if(randomNumber == 3){
        computerChoice = "schaar"
    }

    computerOutput.innerHTML = computerChoice

}

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

    }

    else{

        resultOutput.innerHTML = "Computer wint"

    }

}