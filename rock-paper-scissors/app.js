/* Methods Used:

.getElementById()
.querySelectorAll()
.forEach()
.addEventListener()
.innerHTML()
e.target.id
Math.floor() or Math.ceil()
Math.random()

*/
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.ceil(Math.random() * possibleChoices.length)
    console.log(randomNumber)
    if(randomNumber == 1) {
        computerChoice = 'rock'
    }
    if(randomNumber == 2) {
        computerChoice = 'paper'
    }
    if(randomNumber == 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice==userChoice) {
        result = "It's a Draw!"
    }
    if(computerChoice=='rock' && userChoice=='paper') {
        result = 'You Won!'
    }
    if(computerChoice=='rock' && userChoice=='scissors') {
        result = 'You Lost!'
    }
    if(computerChoice=='paper' && userChoice=='rock') {
        result = 'You Lost!'
    }
    if(computerChoice=='paper' && userChoice=='scissors') {
        result = 'You Won!'
    }
    if(computerChoice=='scissors' && userChoice=='rock') {
        result = 'You Won!'
    }
    if(computerChoice=='scissors' && userChoice=='paper') {
        result = 'You Lost!'
    }
    resultDisplay.innerHTML = result
}