import { Elements } from './elements.js';
import Controls from './controls.js';
import Events from './events.js';
import Sounds from './sounds.js';
import Timer from './timer.js';

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

const sound = Sounds();

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonReduce,
  buttonForestSound,
  buttonRainSound,
  buttonCoffeShopSound,
  buttonFireplaceSound,
  playForestSound: sound.playForestSound,
  playRainSound: sound.playRainSound,
  playCoffeeShopSound: sound.playCoffeeShopSound,
  playFireplaceSound: sound.playFireplaceSound
});

const timer = Timer({
  displayMinutes,
  displaySeconds,
  hideButtonPause: controls.hideButtonPause,
  cantReduce: controls.cantReduce,
  canReduce: controls.canReduce,
  pauseSounds: controls.pauseSounds
});

Events(controls, timer, sound);
