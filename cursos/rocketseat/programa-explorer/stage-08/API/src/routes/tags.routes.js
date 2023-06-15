const { Router } = require("express");

const TagsControllers = require("../Controllers/TagsController")

const tagsRoutes = Router()

const tagsControllers = new TagsControllers()

tagsRoutes.get("/:user_id", tagsControllers.index);



module.exports = tagsRoutes;
































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