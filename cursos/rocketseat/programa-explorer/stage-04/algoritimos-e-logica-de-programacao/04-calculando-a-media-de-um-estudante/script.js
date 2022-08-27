/*
  Solicitar o nome do aluno e as 3 notas do bimestre e calcular a média daquele aluno;

  A média para aprovado deverá ser maior ou igual a 6;
  A média para recuperação deverá ser maior ou igual a 4 e menor que 6;
  A média para reprovado deverá ser menor do que 3;

  Se o aluno passou no bimestre, dar os parabéns;

  Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação;

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a ntoa;
*/

let student = prompt('Qual o nome do(a) aluno(a)?');
let n1 = prompt('Qual a nota da primeira prova?');
let n2 = prompt('Qual a nota da segunda prova?');
let n3 = prompt('Qual a nota da terceira prova?');

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;

let result = average >= 6;

average = average.toFixed(2);

if (result)
  alert('Parabéns ' + student + '! Aprovadi com média ' + average);
else if (average < 3)
  alert('Média ' + average + ', reprovado!')
else
  alert(student + ' estude para sua prova de recuperação! Sua média foi ' + average);