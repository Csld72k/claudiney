import { Elements } from "./elements.js";

const {
  secondsDisplay,
  minutesDisplay,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonReduce,
  buttonLightMode,
  buttonDarkMode
} = Elements

export default function Events({ controls, timer, sound }) {

  function play() {

    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    if (minutes > 1 || seconds > 1) {
      timer.countdown();
      controls.hidePlayAndShowPause();
    }

  }

  function pause() {

    timer.pauseCountdown();
    controls.hidePauseAndShowPlay();

  }

  function stop() {

    timer.resetCountdown();
    controls.hidePauseAndShowPlay();

  }
  function add() {

    let minutes = Number(minutesDisplay.textContent);
    let newMinutes = minutes + 5;

    minutesDisplay.innerText = String(newMinutes).padStart(2, '0');
    controls.disableAndEnableButtonReduce(newMinutes);

  }
  function reduce() {

    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let newMinutes = minutes - 5;

    minutesDisplay.innerText = String(newMinutes).padStart(2, '0');
    controls.disableAndEnableButtonReduce(newMinutes);
    timer.isFinished(newMinutes, seconds);
  }
  function forest() {

    controls.toggleCheckboxCheckedTrueFalse('#forest');
    sound.onOffForestSound('#forest');

  }

  function rain() {

    controls.toggleCheckboxCheckedTrueFalse('#rain');
    sound.onOffRainSound('#rain');

  }

  function coffeeShop() {

    controls.toggleCheckboxCheckedTrueFalse('#coffee-shop');
    sound.onOffCoffeeShopSound('#coffee-shop');

  }

  function fireplace() {

    controls.toggleCheckboxCheckedTrueFalse('#fireplace');
    sound.onOffFireplaceSound('#fireplace');

  }

  function toggleLightAndDarkMode() {

    buttonLightMode.classList.contains('hide') ? controls.switchToLight() : controls.switchToDark();

  }

  buttonPlay.addEventListener('click', play);
  buttonPause.addEventListener('click', pause);
  buttonStop.addEventListener('click', stop);
  buttonAdd.addEventListener('click', add);
  buttonReduce.addEventListener('click', reduce);
  buttonForest.addEventListener('click', forest);
  buttonRain.addEventListener('click', rain);
  buttonCoffeeShop.addEventListener('click', coffeeShop);
  buttonFireplace.addEventListener('click', fireplace);
  buttonLightMode.addEventListener('click', toggleLightAndDarkMode);
  buttonDarkMode.addEventListener('click', toggleLightAndDarkMode);


}