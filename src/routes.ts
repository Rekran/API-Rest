import { Router } from "express";
import { subjectController } from "./controllers/SubjectController";
import { roomController } from "./controllers/RoomController";

const routes = Router()

routes.post('/subject', new subjectController().create)
routes.post('/room', new roomController().create)
routes.get('/room', new roomController().list)
routes.post('/video/:idRoom/create', new roomController().createVideo)
routes.post('/room/:idRoom/subject', new roomController().roomSubject)



export default routes

