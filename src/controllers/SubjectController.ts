import { Request, Response } from "express"

export class subjectController{
    async create(req: Request, res: Response){
        const { name } = req.body
    }
}