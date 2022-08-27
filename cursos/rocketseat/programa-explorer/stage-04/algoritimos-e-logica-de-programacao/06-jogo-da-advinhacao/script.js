/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "De 0 a 10, advinhe o número que estou pensando.";

  Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o número aleatório gerado pelo sistema com um máximo de 10 tentativas;

  Enquanto o usuário não advinhar o número, mostrar a mensagem:
  "Erro, tente novamente";

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! O número que eu pensei foi X e você advinhou o número em X tentativas.";

  Substitua o "X" da mensagem, pelo número de tentativas;
*/

let number = prompt('De 0 a 10, advinhe o número que estou pensando.');
const randonNumber = Math.round(Math.random() * 10);

let attempts = 1;

while (Number(number) != randonNumber) {
  number = prompt('Erro, tente novamente.');
  attempts++;
}

if (attempts == 1)
  alert(`Parabéns! O número que eu pensei foi ${randonNumber} e você advinhou o número em ${attempts} tentativa.`);
else
  alert(`Parabéns! O número que eu pensei foi ${randonNumber} e você advinhou o número em ${attempts} tentativas.`);
