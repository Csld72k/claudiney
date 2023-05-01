const express = require("express"); //Importou o Express

const app = express(); //Inicializou o Express

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;
  response.send(`ID da mensagem: ${id} para o usuário ${user}`)
}); //Inserindo um método GET para teste - utilizando o Route Params

app.get("/users", (request, response) => {
  const { page, limit } = request.query;
  response.send(`Página: ${page}. Mostrar: ${limit}`)
}); //Inserindo um método GET para teste - utilizando o Query Params

const PORT = 3333; //Define uma porta para a API ficar observando/listening

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); //Fica escutando a porta e ao iniciar a aplicação executa a função