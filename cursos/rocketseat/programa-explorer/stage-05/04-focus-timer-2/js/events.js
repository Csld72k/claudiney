import Controls from './controls.js';
import { Elements } from './elements.js';
const {
  displayMinutes,
  displaySeconds,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonReduce,
  buttonForestSound,
  buttonRainSound,
  buttonCoffeShopSound,
  buttonFireplaceSound
} = Elements;

export default function Events(controls, timer, sound) {

  function playTimer() {

    if (displayMinutes.textContent > 0 || displaySeconds.textContent > 0) {
      timer.countdown();
      controls.hideButtonPlay();
    }

  }

  function pauseTimer() {

    timer.pause();
    controls.hideButtonPause();

  }

  function stopTimer() {

    timer.pause();
    controls.hideButtonPause();
    timer.stop();

  }

  function addTime() {

    // let currentMinute = timer.returnCurrentsMinutes();
    let currentMinute = Number(displayMinutes.textContent);
    currentMinute += 5;
    timer.updateMinutesDisplay(currentMinute);

  }

  function reduceTime() {

    let currentMinute = Number(displayMinutes.textContent);
    currentMinute -= 5;
    timer.updateMinutesDisplay(currentMinute);

  }

  function forestSound() {

    controls.forestButton();
    sound.playForestSound();

  }

  function rainSound() {

    controls.rainButton();
    sound.playRainSound();

  }

  function coffeeShopSound() {

    controls.coffeeShopButton();
    sound.playCoffeeShopSound();

  }

  function fireplaceSound() {

    controls.fireplaceButton();
    sound.playFireplaceSound();

  }

  buttonPlay.addEventListener('click', playTimer);
  buttonPause.addEventListener('click', pauseTimer);
  buttonStop.addEventListener('click', stopTimer);
  buttonAdd.addEventListener('click', addTime);
  buttonReduce.addEventListener('click', reduceTime);
  buttonForestSound.addEventListener('click', forestSound);
  buttonRainSound.addEventListener('click', rainSound);
  buttonCoffeShopSound.addEventListener('click', coffeeShopSound);
  buttonFireplaceSound.addEventListener('click', fireplaceSound);

}