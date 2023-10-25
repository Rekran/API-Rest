import { Router } from "express";
import { subjectController } from "./controllers/SubjectController";

const routes = Router()

routes.post('/subject', new subjectController().create)

export default routes

