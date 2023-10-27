import { Request, Response } from "express"
import  { subjectSchema } from "../schema/subjectSchema";
import { subjectRepository } from "../repositories/subjectRepository";
import { BadRequestError } from "../helpers/api.erros";



export class subjectController{
    async create(req: Request, res: Response){

        const { name }  = subjectSchema.parse(req.body);

        const subjectAlreadyExists = await subjectRepository.findOneBy({ name })

        if(subjectAlreadyExists) throw new BadRequestError("Subject already exists")

        const newSubject = subjectRepository.create({ name })

        await subjectRepository.save(newSubject)

        return res.status(201).json(newSubject)

        
    }
}