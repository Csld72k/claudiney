export default function Controls({
  buttonPlay,
  buttonPause,
  buttonReduce,
  buttonLightMode,
  buttonDarkMode
}) {

  function disableAndEnableButtonReduce(minutes) {

    if (minutes < 5) {
      buttonReduce.disabled = true;
      buttonReduce.classList.add('cant-reduce');
    }
    else {
      buttonReduce.disabled = false;
      buttonReduce.classList.remove('cant-reduce');
    }
  }

  function hidePlayAndShowPause() {

    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');

  }

  function hidePauseAndShowPlay() {

    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');

  }

  function checkedTrueToFalse(inputCheckbox) {

    inputCheckbox.checked = false;
    inputCheckbox.classList.add('selected');

  }

  function checkedFalseToTrue(inputCheckbox) {

    inputCheckbox.checked = true;
    inputCheckbox.classList.remove('selected');

  }

  function toggleCheckboxCheckedTrueFalse(elementId) {

    let inputCheckbox = document.querySelector(elementId);

    inputCheckbox.checked === true ? checkedTrueToFalse(inputCheckbox) : checkedFalseToTrue(inputCheckbox);

  }

  function darkColorVariables() {

    document.documentElement.style.setProperty('--primary-color', '#fff');
    document.documentElement.style.setProperty('--card-bg-color', '#29292E');
    document.documentElement.style.setProperty('--icon-hover', '#121214');
    document.documentElement.style.setProperty('--selected-card-bg-color', '#0A3442');
    document.documentElement.style.setProperty('--bg-color', '#121214');

  }
  function lightColorVariables() {

    document.documentElement.style.setProperty('--primary-color', '#323238');
    document.documentElement.style.setProperty('--card-bg-color', '#e1e1e6');
    document.documentElement.style.setProperty('--icon-hover', '#fff');
    document.documentElement.style.setProperty('--selected-card-bg-color', '#02799d');
    document.documentElement.style.setProperty('--bg-color', '#fff');

  }

  function switchToDark() {

    buttonLightMode.classList.add('hide');
    buttonDarkMode.classList.remove('hide');
    darkColorVariables();

  }
  function switchToLight() {

    buttonLightMode.classList.remove('hide');
    buttonDarkMode.classList.add('hide');
    lightColorVariables();

  }

  return {
    hidePlayAndShowPause,
    hidePauseAndShowPlay,
    disableAndEnableButtonReduce,
    toggleCheckboxCheckedTrueFalse,
    switchToDark,
    switchToLight
  }

}