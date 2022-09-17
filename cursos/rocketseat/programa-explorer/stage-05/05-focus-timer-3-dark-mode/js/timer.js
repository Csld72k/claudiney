export default function Timer({
  secondsDisplay,
  minutesDisplay,
  hidePauseAndShowPlay,
  disableAndEnableButtonReduce,
  playFinishTimerSound,
  pauseAllSounds
}) {

  let timerInterval;
  let minutes = Number(minutesDisplay.textContent);
  let seconds = Number(secondsDisplay.textContent);

  function updateSecondsDisplay(seconds) {

    secondsDisplay.innerText = String(seconds).padStart(2, '0');

  }

  function updateMinutesDisplay(minutes) {

    minutesDisplay.innerText = String(minutes).padStart(2, '0');

  }

  function pauseCountdown() {

    clearInterval(timerInterval);

  }

  function resetCountdown() {

    pauseCountdown();
    minutes = '00';
    seconds = '00';
    updateMinutesDisplay(minutes);
    updateSecondsDisplay(seconds);

  }

  function isFinished(minutes, seconds) {

    if (minutes <= 0 && seconds <= 0) {

      playFinishTimerSound();
      pauseCountdown();
      pauseAllSounds();
      hidePauseAndShowPlay();

    }

  }

  function countdown() {

    timerInterval = setInterval(() => {

      minutes = Number(minutesDisplay.textContent);
      seconds = Number(secondsDisplay.textContent);

      if (seconds <= 0) {

        --minutes
        seconds = 60;

      }

      --seconds;
      disableAndEnableButtonReduce(minutes);
      updateSecondsDisplay(seconds);
      updateMinutesDisplay(minutes);
      isFinished(minutes, seconds);

    }, 1000);

  }

  return {
    countdown,
    pauseCountdown,
    resetCountdown,
    isFinished
  }

}