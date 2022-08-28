// Variáveis
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const screen1 = document.querySelector('.screen-1');
const screen2 = document.querySelector('.screen-2');
let randonNumber = Math.round(Math.random() * 10);
let attempts = 1;
let correct = false; // Essa variável é para definir quando está na tela 1 e tela 2 para poder ativar o EventListener apenas na tela 2
console.log(randonNumber)
// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', (e) => {
  if (correct == true)
    if (e.key == 'Enter')
      handleResetClick();
});

// Funções
function generateNewRandonNumber() {
  randonNumber = Math.round(Math.random() * 10);
}

function handleTryClick(event) {
  event.preventDefault(); // Evitar o padrão

  const inputNumber = document.querySelector('#inputNumber');

  if (Number(inputNumber.value) == randonNumber) {
    correct = true;
    toggleScreen();
    if (attempts == 1)
      screen2.querySelector('h2').innerText = `Acertou em ${attempts} tentativa.`;
    else
      screen2.querySelector('h2').innerText = `Acertou em ${attempts} tentativas.`;
  }

  attempts++;
  inputNumber.value = '';
}

function handleResetClick() {
  correct = false;
  generateNewRandonNumber();
  toggleScreen();
  attempts = 1;
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}
