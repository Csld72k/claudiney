/*
Capture 10 iten para compor a lista de um supermercado;

Após capturar os 10 itens, imprima-os, separando por vírgula;
*/

let supermarketList = []

for (let i = 0; i < 10; i++) {

  let itemName = prompt('Digite o item ' + (i + 1));

  supermarketList[i] = itemName;

}

alert(supermarketList);
