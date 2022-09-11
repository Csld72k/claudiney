import { Elements } from './elements.js'

const {
  buttonPlay,
  buttonPause,
  buttonReduce,
  forestCheckbox,
  rainCheckbox,
  coffeeShopCheckbox,
  fireplaceCheckbox
} = Elements

export default function Controls({
  playForestSound,
  playRainSound,
  playCoffeeShopSound,
  playFireplaceSound
}) {

  function hideButtonPlay() {

    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');

  }

  function hideButtonPause() {

    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');

  }

  function cantReduce() {

    buttonReduce.disabled = true
    buttonReduce.classList.add('cant-reduce');

  }

  function canReduce() {

    buttonReduce.disabled = false
    buttonReduce.classList.remove('cant-reduce');

  }

  function toggleCheckboxCheckedTrueFalse(id) {
    let inputCheckbox = document.querySelector(id);
    let toggleCheckboxCheckedTrueFalse = inputCheckbox;
    toggleCheckboxCheckedTrueFalse.checked === true ? toggleCheckboxCheckedTrueFalse.checked = false : toggleCheckboxCheckedTrueFalse.checked = true;
  }

  function forestButton() {

    toggleCheckboxCheckedTrueFalse('#forest');

  }

  function rainButton() {

    toggleCheckboxCheckedTrueFalse('#rain');


  }

  function coffeeShopButton() {

    toggleCheckboxCheckedTrueFalse('#coffee-shop');


  }

  function fireplaceButton() {

    toggleCheckboxCheckedTrueFalse('#fireplace');


  }

  function pauseSounds() {

    if (forestCheckbox.checked) {
      forestButton();
      playForestSound();
    }

    if (rainCheckbox.checked) {
      rainButton();
      playRainSound();
    }

    if (coffeeShopCheckbox.checked) {
      coffeeShopButton();
      playCoffeeShopSound();
    }

    if (fireplaceCheckbox.checked) {
      fireplaceButton();
      playFireplaceSound();
    }

  }

  return {
    hideButtonPlay,
    hideButtonPause,
    cantReduce,
    canReduce,
    forestButton,
    rainButton,
    coffeeShopButton,
    fireplaceButton,
    pauseSounds
  }

}