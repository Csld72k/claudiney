/*

  Nesse desafio você irá criar uma lista de **estudentes** e, cada estudente dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

const studentList = [
  {
    name: 'João',
    n1: 8,
    n2: 4,
  },
  {
    name: 'Letícia',
    n1: 10,
    n2: 9,
  },
  {
    name: 'Diego',
    n1: 8,
    n2: 10,
  },
  {
    name: 'Júlia',
    n1: 3,
    n2: 8,
  },
];

let media;

function printResult(student) {

  n1 = student.n1;
  n2 = student.n2;
  media = (n1 + n2) / 2;

  let message;

  if (media >= 7)
    message = `
    A média do(a) aluno(a) ${student.name} é: ${media}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `
  else
    message = `
    A média do(a) aluno(a) ${student.name} é: ${media}
    Não foi dessa vez, ${student.name}! Tente novamente!
    `

  return message;
}

for (let student of studentList) {
  alert(printResult(student));
}