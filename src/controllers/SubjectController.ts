import { Request, Response } from "express"
import  { subjectSchema } from "../schema/subjectSchema";
import { subjectRepository } from "../repositories/subjectRepository";


export class subjectController{
    async create(req: Request, res: Response){

        const { name }  = subjectSchema.parse(req.body);

        const newSubject = subjectRepository.create({ name })

        await subjectRepository.save(newSubject)

        return res.status(201).json(newSubject)

        
    }
}