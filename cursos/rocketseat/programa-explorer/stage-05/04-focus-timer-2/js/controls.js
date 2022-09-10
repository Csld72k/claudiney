import { Elements } from './elements.js'

const {
  buttonPlay,
  buttonPause,
  buttonReduce
} = Elements

export default function Controls() {

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
    toggleCheckboxCheckedTrueFalse.checked === true ? toggleCheckboxCheckedTrueFalse.checked = false : toggleCheckboxCheckedTrueFalse.checked = true
  }

  function forestButton() {

    toggleCheckboxCheckedTrueFalse('#forest');
    // if ()

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


  return {
    hideButtonPlay,
    hideButtonPause,
    cantReduce,
    canReduce,
    forestButton,
    rainButton,
    coffeeShopButton,
    fireplaceButton
  }

}