class UsersController {
  /*
    * index - GET para listar vários registros.
    * show - GET par exibir um registro específico.
    * create - POST para criar um registro.
    * update - PUT para atualizar um registro.
    * delete - DELETE para remover um registro.
  */

  create(request, response) {
    const { name, email, password } = request.body;

    response.json({ name, email, password });
  }

}

module.exports = UsersController;