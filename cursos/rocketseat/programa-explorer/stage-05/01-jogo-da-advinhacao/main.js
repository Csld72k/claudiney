let randomNumber = Math.round(Math.random() * 10);
let attempts = 0;
let btnTry = document.querySelector('#btnTry');
let btnReset = document.querySelector('#btnReset');
let chosenNumber = document.querySelector('#inputNumber');
let screen1 = document.querySelector('.screen-1');
let screen2 = document.querySelector('.screen-2');

btnTry.addEventListener('click', verifyNumber);
btnReset.addEventListener('click', toggleScreen);
document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) toggleScreen()
});


function verifyNumber(event) {
  event.preventDefault(event);
  if (chosenNumber.value.length >= 1) attempts++;
  if (Number(chosenNumber.value) === randomNumber) rightAnswer();
  chosenNumber.value = '';
}

function rightAnswer() {
  let changePlurality;
  if (attempts === 1)
    changePlurality = 'tentativa'
  else
    changePlurality = 'tentativas'
  screen2.querySelector('h2').innerHTML = `Acertou em ${attempts} ${changePlurality}.`;
  newRandomNumber();
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
  attempts = 0;
}

function newRandomNumber() {
  randomNumber = Math.round(Math.random() * 10);
}
