const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  const { name, email, password } = request.body;

  response.json({ name, email, password });
}); //Inserindo um método POST para teste - utilizando Insomnia

module.exports = usersRoutes;