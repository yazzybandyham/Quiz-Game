

// Countdown Timer
const startingMinutes = 2; //starting number of counter
let time = startingMinutes * 60; //60 seconds per minute

const countdown = document.getElementById('countdown');
let refreshInterval = setInterval(counter, 1000);

function counter(){
    const minutes = Math.floor(time / 60); //rounds number down to nearest integer
    let seconds = time % 60;
    seconds = seconds < 2 ? '0' + seconds : seconds;

    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;

    //stops counter from running into negative numbers
    if(time < 0) {
        clearInterval(refreshInterval);
    }
}
