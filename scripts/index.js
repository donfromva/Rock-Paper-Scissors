
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let retryBtn = document.getElementById('retry-btn')
let userScoreText = document.querySelector('.user-score');
let compScoreText = document.querySelector('.comp-score');
let winLossOutput = document.querySelector('.wl-output');
let seriesWinner = document.querySelector('.series-win');
let replayDiv = document.querySelector('.replay')

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

    if (usersChoice === compsChoice) {
        winLossOutput.innerText = "There was a draw";
    } else if (((usersChoice === 'rock') && (compsChoice === 'scissors')) || 
    ((usersChoice === 'scissors') && (compsChoice === 'paper')) || 
    ((usersChoice === 'paper') && (compsChoice === 'rock'))) {
        usersScore++
        if (usersScore === 5) {
            winLossOutput.remove()
            seriesWinner.innerText = 'Congrats! You won the series!'
            rockBtn.style.pointerEvents = 'none'
            paperBtn.style.pointerEvents = 'none'
            scissorsBtn.style.pointerEvents = 'none'
            replayDiv.style.display = 'flex'
            
        }
        userScoreText.innerText = usersScore
        winLossOutput.innerText = "You won this round!";
    } else {
        compsScore++
        if (compsScore === 5) {
            winLossOutput.remove()
            seriesWinner.innerText = "The computer has won the series..."
            rockBtn.style.pointerEvents = 'none'
            paperBtn.style.pointerEvents = 'none'
            scissorsBtn.style.pointerEvents = 'none'
            replayDiv.style.display = 'flex'
        }
        compScoreText.innerText = compsScore
        winLossOutput.innerText = "The computer won this round.";
    }
}

retryBtn.addEventListener('click', () => {
    location.reload()
})


