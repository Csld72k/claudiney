/**
    Métodos usados na classe controller:
    * index - GET para listar vários registros.
    * show - Get para exibir um registro específico.
    * create - POST para criar um registro.
    * update - PUT para atualizar um registro.
    * delete - DELETE para remover um registro.
  */

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body; // Cria o usuário

    response.status(201).json({ name, email, password }); // Devolve as informações do usuário e o status code
  }
}

module.exports = UsersController;