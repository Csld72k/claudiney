require("express-async-errors");

const AppError = require("./utils/AppError");

const express = require("express"); //Importa o Express

const routes = require("./routes"); //Importa o arquivo ./routes/index.js

const app = express(); //Inicializa o Express
app.use(express.json()); //Para que a API saiba qual padrão iremos utilizar no 'request.body' que nesse caso será JSON

app.use(routes); // Para que a aplicação use as rotas definidas no arquivo ./routes/index.js

const PORT = 3333; //Define uma porta para a API ficar observando/listening

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.log(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  });

});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); //Fica escutando a porta e ao iniciar a aplicação executa a função