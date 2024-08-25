let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#submitButton')
const userInput=document.querySelector('#userInput')
const guesSlot=document.querySelector('#guessues')
const remaining=document.querySelector('#lastResult')
const lowOrHi=document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')
const p=document.createElement('p')

let prevGuess=[]
let noOfGuess=1

let playGame=true;

if (playGame) {
    submit.addEventListener('click',function(e){
       e.preventDefault()
       const guess=parseInt(userInput.value) 
       validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number.')
    }
    else if(guess<1){alert('Please enter a number more than 1.')}
    else if(guess>100){alert('Please enter a number less than 100. ')}
    else{
        prevGuess.push(guess)
        if (noOfGuess === 10) {
            displayGuess(guess)
            displayMessages(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess===randomNumber) {
        displayMessages(`Your guess is accurate, the number is ${randomNumber}`)
    }
    else if(guess<randomNumber){displayMessages(`Number is low.`)}
    else if(guess>randomNumber){displayMessages(`Number is high.`)}

    
}

function displayGuess(guess) {
    userInput.value=''    
    guesSlot.innerHTML+=`${guess} `
    noOfGuess++;
    remaining.innerHTML=`${11-noOfGuess}`
}


function displayMessages(message) {
lowOrHi.innerHTML=`<h2>${message}</h2>`   
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    submit.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    lowOrHi.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function() {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        noOfGuess = 1
        guesSlot.innerHTML = ''
        lowOrHi.innerHTML = ''
        remaining.innerHTML = `${11 - noOfGuess}`
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        lowOrHi.removeChild(p)
        playGame = true
    })
}