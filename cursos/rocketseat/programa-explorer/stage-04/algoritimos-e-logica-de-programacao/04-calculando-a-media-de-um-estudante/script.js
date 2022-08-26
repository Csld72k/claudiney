/*
Solicitar o nome do aluno e as 3 notas do bimestre e calcular a média daquele aluno;

A média positiva deverá ser maior ou igual a 6;

Se o aluno passou no bimestre, dar os parabéns;

Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação;

Em ambos os casos, mostre uma mensagem com o nome do aluno e a ntoa;
*/

let student = prompt('Qual o nome do(a) aluno(a)?');
let n1 = prompt('Qual a nota da primeira prova?');
let n2 = prompt('Qual a nota da segunda prova?');
let n3 = prompt('Qual a nota da terceira prova?');

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;

let result = average > 6;

average = average.toFixed(2);

if (result)
  alert('Parabéns ' + student + '! Sua média foi ' + average);
else
  alert(student + ' estude para sua prova de recuperação! Sua média foi ' + average);