
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');

// With any weapon a user chooses, a function that chooses the computers weapon (randomly) will evoke
let usersChoice;
let usersScore = 0;

rockBtn.onclick = () => {
    usersChoice = 'rock'
    compsTurn()    
}
paperBtn.onclick = () => {
    usersChoice = 'paper'
    compsTurn()
}
scissorsBtn.onclick = () => {
    usersChoice = 'scissors'
    compsTurn()
}

let compsChoice;
let compsScore = 0;

optsArr = ['rock', 'paper', 'scissors'];

function compsTurn() {
    compsChoice = optsArr[Math.floor(Math.random() * optsArr.length)]
    console.log(usersChoice)
    console.log(compsChoice)
    
    if (usersChoice === compsChoice) {
        console.log('There was a draw')
    } else if (((usersChoice === 'rock') && (compsChoice === 'scissors')) || 
    ((usersChoice === 'scissors') && (compsChoice === 'paper')) || 
    ((usersChoice === 'paper') && (compsChoice === 'rock'))) {
        usersScore++
        console.log("You've won this round!")
    } else {
        console.log("The computer has won this round.")
        compsScore++
    }

    compScore()
    userScore()
}

function compScore() {
    console.log(`Computer's score: ${compsScore}`)
}

function userScore() {
    console.log(`User's score: ${usersScore}`)
}
