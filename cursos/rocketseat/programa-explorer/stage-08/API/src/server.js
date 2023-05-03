const express = require("express"); //Importou o Express

const app = express(); //Inicializou o Express

app.post("/users", (request, response) => {
  response.send(`Você chamou o POST`)
}); //Inserindo um método POST para teste - utilizando Insomnia

const PORT = 3333; //Define uma porta para a API ficar observando/listening

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); //Fica escutando a porta e ao iniciar a aplicação executa a função