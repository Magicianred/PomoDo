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

let type = 'Work';

let timeSpentInCurrentSession = 0;





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
  stepDown();
  displayCurrentTimeLeftInSession();
}, 1000);
    }
  }
}


const stopClock = () => {
  displaySessionLog(type);
  clearInterval(clockTimer);
  isClockRunning = false;
  currentTimeLeftInSession = workSessionDuration;
  displayCurrentTimeLeftInSession();
  timeSpentInCurrentSession = 0;
  type = 'Work';
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


const stepDown = () => {
  if (currentTimeLeftInSession > 0) {
    // decrease time left / increase time spent
    currentTimeLeftInSession--;
    timeSpentInCurrentSession++;
    } else if (currentTimeLeftInSession === 0) {
      timeSpentInCurrentSession = 0;
      if (type === 'Work') {
        currentTimeLeftInSession = breakSessionDuration;
        displaySessionLog('Work');
        type = 'Break';
      } else {
        currentTimeLeftInSession = workSessionDuration;
        type = 'Work';
        displaySessionLog('Break');
      }
    }
    displayCurrentTimeLeftInSession();
  }



  const displaySessionLog = (type) => {
    const sessionsList = document.querySelector('#pomodo-sessions');
    // append li to it
    const li = document.createElement('li');
    let sessionLabel = type;
    let elapsedTime = parseInt(timeSpentInCurrentSession / 60)
    elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1';

    const text = document.createTextNode(
      `${sessionLabel} : ${elapsedTime} min`
    )
    li.appendChild(text);
    sessionsList.appendChild(li);
  }
