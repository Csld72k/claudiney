const express = require("express"); //Importou o Express

const app = express(); //Inicializou o Express
app.use(express.json()); //Para que a API saiba qual padrão iremos utilizar no 'request.body' que nesse caso será JSON

app.post("/users", (request, response) => {
  const { name, email, password } = request.body;

  response.json({ name, email, password });
}); //Inserindo um método POST para teste - utilizando Insomnia

const PORT = 3333; //Define uma porta para a API ficar observando/listening

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); //Fica escutando a porta e ao iniciar a aplicação executa a função