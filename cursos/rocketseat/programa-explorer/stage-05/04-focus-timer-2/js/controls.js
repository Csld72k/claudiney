export default function Controls({
  buttonPlay,
  buttonPause,
  buttonReduce
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

  return {
    hidePlayAndShowPause,
    hidePauseAndShowPlay,
    disableAndEnableButtonReduce,
    toggleCheckboxCheckedTrueFalse
  }

}