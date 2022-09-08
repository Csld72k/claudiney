import { elements } from './elements.js';

const {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
} = elements

export default function ({ controls, timer, sound }) {

  buttonPlay.addEventListener('click', () => {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonPause.addEventListener('click', () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  buttonStop.addEventListener('click', () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
    sound.bgAudio.pause();
  });
  buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.remove('hide');
    buttonSoundOff.classList.add('hide');
    sound.bgAudio.play();
  });

  buttonSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes();
    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });
}