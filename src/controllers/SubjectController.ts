import { Request, Response } from "express"
import  { subjectSchema } from "../schema/subjectSchema";

export class subjectController{
    async create(req: Request, res: Response){

        const { name } = subjectSchema.parse(req.body);
    }
}