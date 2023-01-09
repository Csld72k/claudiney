const { Router } = require("express")
const NotesController = require("../controllers/NotesCrontoller")

const notesController = new NotesController()

const notesRoutes = Router()

notesRoutes.post("/:user_id", notesController.create)
notesRoutes.delete("/id", notesController.delete)


module.exports = notesRoutes