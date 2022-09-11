export default function Timer({
  displayMinutes,
  displaySeconds,
  hideButtonPause,
  cantReduce,
  canReduce,
  pauseSounds,
  finishTimer
}) {

  let minutes = Number(displayMinutes.textContent);
  let timerInterval;

  function updateSecondsDisplay(seconds) {

    displaySeconds.innerText = String(seconds).padStart(2, '0');

  }

  function updateMinutesDisplay(minutes) {

    displayMinutes.innerText = String(minutes).padStart(2, '0');

  }

  function reset() {
    updateMinutesDisplay(minutes);
    updateSecondsDisplay('00');
  }

  setInterval(() => {
    let minutes = displayMinutes.textContent;
    if (minutes < 5) cantReduce();
    else canReduce();
  }, 1)

  function countdown() {

    let seconds = Number(displaySeconds.textContent);
    let newSeconds = seconds;

    timerInterval = setInterval(() => {
      let minutes = Number(displayMinutes.textContent);
      let isFinished = minutes <= 0 && newSeconds <= 0;



      if (isFinished) {
        updateSecondsDisplay('00');
        pause();
        hideButtonPause();
        pauseSounds();
        finishTimer();
        return
      }


      if (newSeconds <= 0) {
        newSeconds = 60;
        --minutes;
      }

      --newSeconds;

      updateMinutesDisplay(minutes);
      updateSecondsDisplay(newSeconds);

    }, 1000);

  }

  function pause() {

    clearInterval(timerInterval);

  }

  function stop() {

    updateMinutesDisplay(minutes);
    updateSecondsDisplay('00');


  }





  return {
    updateMinutesDisplay,
    updateSecondsDisplay,
    countdown,
    pause,
    stop,
    reset,
  }

}

