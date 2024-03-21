let randomNumber = parseInt((Math.random())*100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    //validates whether the userinput is nan or negative no or more than 100
    if(isNaN(guess)){
        alert('Please enter valid number')
    }else if(guess < 1){
        alert('PLease enter a number more than 1')
    }else if(guess > 100){
        alert('PLease enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game over. RANDOM NUMBER WAS ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)


        }
    }
}


function checkGuess(guess){
    //checks whether the input is equal to the random number or not
    if(guess === randomNumber){
        displayMessage(`YOU GUESSED IT RIGHT`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`NUMBER IS LOW`)
    
    }else if(guess > randomNumber){
        displayMessage(`NUMBER IS HIGH`)
    }
}


function displayGuess(guess){
    //updates input, prev guess, guesses remaining
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess ++;
    remaining.innerHTML = `${11 - numGuess}`
}


function displayMessage(message){
    //displays message
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<button id='newGame'>Start New Game</button>`;
    startOver.appendChild(p)
    playGame = false
    newGame();

}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt((Math.random())*100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })

}


// if it is last guess it shows game over even if the guess is correct

