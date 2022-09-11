export default function Sounds() {


  const forest = new Audio('https://github.com/Csld72k/claudiney/blob/master/cursos/rocketseat/programa-explorer/stage-05/04-focus-timer-2/sounds/Floresta.wav?raw=true');
  const rain = new Audio('https://drive.google.com/u/0/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2&export=download');
  const coffeeShop = new Audio('https://github.com/Csld72k/claudiney/blob/master/cursos/rocketseat/programa-explorer/stage-05/04-focus-timer-2/sounds/Cafeteria.wav?raw=true');
  const fireplace = new Audio('https://github.com/Csld72k/claudiney/blob/master/cursos/rocketseat/programa-explorer/stage-05/04-focus-timer-2/sounds/Lareira.wav?raw=true');
  const finishTimerSound = new Audio('https://github.com/Csld72k/claudiney/blob/master/cursos/rocketseat/programa-explorer/stage-05/04-focus-timer-2/sounds/audios_kichen-timer.mp3?raw=true')

  forest.loop = true;
  rain.loop = true;
  coffeeShop.loop = true;
  fireplace.loop = true;

  function playForestSound() {

    let forestCheckbox = document.querySelector('#forest');
    forestCheckbox.checked === true ? forest.play() : forest.pause();

  }
  function playRainSound() {

    let rainCheckbox = document.querySelector('#rain');
    rainCheckbox.checked === true ? rain.play() : rain.pause();

  }
  function playCoffeeShopSound() {

    let coffeeShopCheckbox = document.querySelector('#coffee-shop');
    coffeeShopCheckbox.checked === true ? coffeeShop.play() : coffeeShop.pause();

  }
  function playFireplaceSound() {

    let fireplaceCheckbox = document.querySelector('#fireplace');
    fireplaceCheckbox.checked === true ? fireplace.play() : fireplace.pause();

  }

  function pauseSound(chosenSound) {

    chosenSound.pause();

  }

  function finishTimer() {
    finishTimerSound.volume = .2
    finishTimerSound.play();
  }

  return {
    playForestSound,
    playRainSound,
    playCoffeeShopSound,
    playFireplaceSound,
    pauseSound,
    finishTimer
  }

}