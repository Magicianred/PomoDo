const pomodoTimer = document.querySelector('#pomodo-timer');

const startButton = document.querySelector('#pomodo-start');
const pauseButton = document.querySelector('#pomodo-pause');
const stopButton = document.querySelector('#pomodo-stop');

// START
startButton.addEventListener('click', () => {
  toggleClock();
})

// PAUSE
pauseButton.addEventListener('click', () => {
  toggleClock();
})

// STOP
stopButton.addEventListener('click', () => {
  toggleClock(true);
})


let isClockRunning = false;


// 25 mins
let workSessionDuration = 1500;
let currentTimeLeftInSession = 1500;

// 5 mins
let breakSessionDuration = 300;


const toggleClock = (reset) => {
  if (reset) {
    stopClock();
  } else {
    if (isClockRunning === true) {
      // PAUSE THE TIMER
      isClockRunning = false;
      clearInterval(clockTimer);
    } else {
      // START THE TIMER
      isClockRunning = true;
      clockTimer = setInterval(() => {
  currentTimeLeftInSession--;
  displayCurrentTimeLeftInSession();
}, 1000);
    }
  }
}

const stopClock = () => {
  clearInterval(clockTimer);
  isClockRunning = false;
  currentTimeLeftInSession = workSessionDuration;
  displayCurrentTimeLeftInSession();
}

const displayCurrentTimeLeftInSession = () => {
  const secondsLeft = currentTimeLeftInSession;
  let result = '';
  const seconds = secondsLeft % 60;
  const minutes = parseInt(secondsLeft / 60) % 60;
  let hours = parseInt(secondsLeft / 3600);
  function addLeadingZeroes(time) {
    return time < 10 ? `0${time}` : time
  }
  if (hours > 0) result += `${hours}:`
  result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
  pomodoTimer.innerText = result.toString();
}
