/*

  Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [X]  A soma dos dois números;
- [X]  A subtração dos dois números;
- [X]  A multiplicação dos dois números;
- [X]  A divisão dos dois números;
- [X]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [X]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [X]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

let firstNumber = Number(prompt('Digite o primeiro número:'))
let secondNumber = Number(prompt('Digite o segundo número:'))

let sum = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let mul = firstNumber * secondNumber;
let div = firstNumber / secondNumber;
let restDiv = firstNumber % secondNumber;

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A multiplicação dos dois números é: ${mul}`);
alert(`A divisão dos dois números é: ${div}`);
alert(`O resto da divisão dos dois números é: ${restDiv}`);

if (sum % 2 == 0)
  alert(`A soma dos dois números é par: ${sum}`)
else
  alert(`A soma dos dois números é ímpar: ${sum}`)

if (firstNumber === secondNumber)
  alert('Os números inseridos são iguais');
else
  alert('Os números inseridos são diferentes');