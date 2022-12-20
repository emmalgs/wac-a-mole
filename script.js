const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const startButton = document.querySelector('#start-game')
const gameOver = document.querySelector('.win')

let result
let hitPosition
let currentTime
let timerId = null
let countDownTimer
let timer = 800

startGame()

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, timer)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimer)
        clearInterval(timerId)
        gameOver.classList.add('active')
        gameOver.textContent = `Time is up! Your score is ${result}`
    }
}

function startGame() {
    currentTime = 20
    result = 0
    score.textContent = 0
    gameOver.classList.remove('active')
    countDownTimer = setInterval(countDown, 1000)
    moveMole()
}

startButton.addEventListener('click', startGame)

