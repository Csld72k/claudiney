const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require('../dataBase/sqlite')


class UsersControllers{

  async create(request, response){
    const dataBase = await sqliteConnection();
    
    const{ name, email, password }= request.body;
    const hashedPassword = await hash(password, 8);
    
    const checkUserExists = await dataBase.get('SELECT * FROM users WHERE email = (?)', [email])
    if (checkUserExists){
      throw new AppError("This email is already registered")
    }

    await dataBase.run(
      "INSERT INTO users (name , email, password) VALUES (?,?,?)", [ name, email, hashedPassword ]
      );

    return response.status(201).json()
  }

  async update(request, response){
    const dataBase = await sqliteConnection();
    const { id } = request.params;
    
    const { name, email, password, old_password } = request.body;
 
    const user = await dataBase.get(" SELECT * FROM users WHERE id = (?)", [id])
    if(!user) {
      throw new AppError("the user was not found")
    }

    const userWithUpdatedEmail = await dataBase.get("SELECT * FROM users WHERE email = (?)", [email]
    )
    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
      throw new AppError("this email already exists");
    }


    user.name = name ?? user.name;
    user.email = email ?? user.email;


    if (password && !old_password){
      throw new AppError("enter your old password to continue")
    }
    if(password && old_password){
      const checkOldPassword = await compare(old_password, user.password)
    
      if(!checkOldPassword){
        throw new AppError("this is not your old password")
      }

      user.password = await hash(password, 8)
    }

    await dataBase.run(`
      UPDATE users SET 
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
    [user.name, user.email, user.password, id ]
    );

    return response.json();


  }


};


module.exports = UsersControllers;

