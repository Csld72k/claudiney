const { Router } = require("express");

const NotesControllers = require("../Controllers/NotesController")

const notesRoutes = Router()

const notesControllers = new NotesControllers()

notesRoutes.get("/", notesControllers.index);
notesRoutes.post("/:user_id", notesControllers.create);
notesRoutes.get("/:id", notesControllers.show);
notesRoutes.delete("/:id", notesControllers.delete);


module.exports = notesRoutes;
































// =============== method get =================
// app.get("/message/:id/:user", (request, response) => {

//   const { id, user } = request.params;

//   response.send(`
//   id of message: ${id}. 
//   for user ${user}
//   `);
// });


// app.get("/user",  (request ,response) => {
//   const{ page, limit } = request.query;

//   response.send(`page ${page}. show: ${limit}`);
// });
// ============================================