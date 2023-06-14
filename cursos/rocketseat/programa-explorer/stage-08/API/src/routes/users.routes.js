const { Router } = require("express");

const UsersController = require("../controllers/UsersController"); // Importa o controller

const usersRoutes = Router();


function myMiddleware(request, response, next) {
  console.log("Você passou pelo middleware!");

  if (!request.body.isAdmin) return response.json({ message: "user unauthorized" });

  next();
}







const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;