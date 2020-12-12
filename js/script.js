//logic of Game
let score; //for storing the current score of the game
let duration = 30; //duration of the game (30 seconds)
let startTime; // start time in ms 
let ended = true // game it ended



// get DOM refrences for the HTML elements
let timerTxt = document.getElementById('timer')
let scoreTxt = document.getElementById('score')
let clicksTxt = document.querySelector('#clicks')
let startBtn = document.querySelector('#start')
let clickArea = document.querySelector('#clickArea')

//functions for hide / show a HTML element
 let show = elem => {
    elem.style.display = 'inline';
}
let hide = elem => {
    elem.style.display = 'none';
}
 


// start game function 
startGame = () => {
    hide(startBtn)
    score = -1;
    ended = false;
    startTime = new Date().getTime();

    //create timer with the setInterval
    let timerId = setInterval(function () {
        let total = (new Date().getTime() - startTime) / 1000;

        //while total is lower than duration , update timer 
        if (total < duration) {
            timerTxt.textContent = total.toFixed(3);
        } else {
            //game is ended
            ended = true;
            clearInterval(timerId);
            endGame()
        }

    }, 1);
}


const endGame = () => {
    //final stats (score )
    timerTxt.textContent = duration.toFixed(3)
   show(startBtn)
    // show alert to the user in 30 ms for letting the DOM be updated
    setTimeout(() => {
        alert('You made ' + score + ' '  + 'clicks in ' +' ' + duration +  ' ' +' seconds.TRy again  ');
    }, 30);
}



// add click event listner an the start button
startBtn.addEventListener("click" , function (e) {
    startGame()
})



clickArea.addEventListener("click", incrementCounter)

function incrementCounter() { 
    if (!ended) {       
        score ++
        scoreTxt.textContent = score
    }
  
}


