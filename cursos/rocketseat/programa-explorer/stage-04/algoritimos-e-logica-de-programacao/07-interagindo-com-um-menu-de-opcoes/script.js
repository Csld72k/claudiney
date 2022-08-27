/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
    Olá usuário! Digite a opção desejada:
      1. Cadastrar um item na lista;
      2. Mostrar itens cadastrados;
      3. Sair do programa;

  O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:
    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista;
    Caso o usuário digite 2, ele poderá ver os iten cadastrados;
      Se não houver nenhum item cadastrado, mostrar a mensagem:
        "Não existem itens cadastrados";
      Caso o usuário digite 3, a aplicação deverám ser encerrada;

*/

let list = [];

function addItem() {

  let item = prompt('Digite o item que deseja cadastrar na lista.');

  if (item.length > 0) {

    list.push(item);
    alert(item + ' foi adicionado na lista.');
    chooseOption();

  } else {

    alert('Dado inválido. Tente novamente.');
    addItem();

  }

}

function seeItens() {

  if (list.length == 0)

    alert(`Não existe itens cadastrados.`);

  else

    alert(`A lista é composta por: ${list}`);

  chooseOption();

}

function exit() {

  alert('Programa finalizado.');

}

function execSwitch(value) {

  switch (value) {
    case 1:
      addItem();
      break;
    case 2:
      seeItens();
      break;
    case 3:
      exit();
      break;
    default:
      alert('Entrada inválida. Tente novamente usando apenas um dos números disponíveis.')
      chooseOption();
      break;

  }
}

function chooseOption() {

  let option = Number(prompt(`Olá usuário! Digite a opção desejada:

    1. Cadastrar um item na lista;
    2. Mostrar itens cadastrados;
    3. Sair do programa;`));

  if (option == 1 || 2 || 3) {

    execSwitch(option);

  } else {

    alert('Dados inválidos. Tente novamente usando apenas um dos números disponíveis.')
    chooseOption();

  }

}

chooseOption();