import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { IMCcalc, notANumber } from './util.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = event => {

  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = IMCcalc(weight, height);

  displayResultMessage(result);

}

function displayResultMessage(result) {

  const message = `O seu IMC é ${result}`;

  Modal.message.innerText = message;
  Modal.open();

}