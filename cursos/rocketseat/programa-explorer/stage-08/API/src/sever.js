require("express-async-errors")
const AppError = require("./utils/AppError")

const port = 3333;

const router = require("./routes") 

const migrationsRun = require("./dataBase/sqlite/migrations")
migrationsRun();

const express = require("express");
const app = express();
app.use(express.json())
app.use(router);

app.use(( error, request, response, next ) => {

  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "internal sever error"
  });
})

app.listen(port, () => console.log(`sever running on port ${port}`));
