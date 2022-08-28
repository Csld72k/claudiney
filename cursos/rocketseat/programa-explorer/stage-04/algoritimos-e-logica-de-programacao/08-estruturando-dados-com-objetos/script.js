/*

  Crie uma lista de pacientes;

  Cada paciente dentro da lista deverá conter:
    Nome;
    Idade;
    Peso;
    Altura;

  Escreva uma lista contendo os nomes, idades, pesos e alturas dos pacientes;

*/

const patients = [
  {
    name: 'Luiz',
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: 'Alexandra',
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: 'Carlos',
    age: 42,
    weight: 90,
    height: 180,
  }
];

let patientsName = [];
let patientsAge = [];
let patientsWeight = [];
let patientsHeight = [];

for (let patient of patients) {
  patientsName.push(patient.name)
  patientsAge.push(patient.age)
  patientsWeight.push(patient.weight)
  patientsHeight.push(patient.height)
}

alert(`Nome: ${patientsName[0]}, Idade: ${patientsAge[0]}, Peso: ${patientsWeight[0]}, Altura: ${patientsHeight[0]}
Nome: ${patientsName[1]}, Idade: ${patientsAge[1]}, Peso: ${patientsWeight[1]}, Altura: ${patientsHeight[1]}
Nome: ${patientsName[2]}, Idade: ${patientsAge[2]}, Peso: ${patientsWeight[2]}, Altura: ${patientsHeight[2]}
`);