export default function Sounds() {


  const forest = new Audio('');
  const rain = new Audio('');
  const coffeeShop = new Audio('');
  const fireplace = new Audio('');

  forest.loop = true;
  rain.loop = true;
  coffeeShop.loop = true;
  fireplace.loop = true;

  function playForestSound() {

    let forestCheckbox = document.querySelector('#forest');
    forestCheckbox.checked == true ? forest.play() : forest.pause();

  }
  function playRainSound() {

    let rainCheckbox = document.querySelector('#rain');
    rainCheckbox.checked == true ? rain.play() : rain.pause();

  }
  function playCoffeeShopSound() {

    let coffeeShopCheckbox = document.querySelector('#coffee-shop');
    coffeeShopCheckbox.checked == true ? coffeeShop.play() : coffeeShop.pause();

  }
  function playFireplaceSound() {

    let fireplaceCheckbox = document.querySelector('#fireplace');
    fireplaceCheckbox.checked == true ? fireplace.play() : fireplace.pause();

  }

  function pauseSound(chosenSound) {

    chosenSound.pause();

  }

  return {
    playForestSound,
    playRainSound,
    playCoffeeShopSound,
    playFireplaceSound,
    pauseSound
  }

}