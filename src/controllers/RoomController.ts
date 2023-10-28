import { Request, Response } from "express"
import  { roomSchema } from "../schema/roomSchema";
import { roomRepository } from "../repositories/roomRepository";
import { BadRequestError } from "../helpers/api.erros";
import { videoSchema } from "../schema/videoSchema";
import { videoRepository } from "../repositories/videoRepository";
import { subjectRepository } from "../repositories/subjectRepository";
import { Subject } from "typeorm/persistence/Subject";


export class roomController{
    async create(req: Request, res: Response){

        const data  = roomSchema.parse(req.body);
    
        const newSubject = roomRepository.create( data )

        await roomRepository.save(newSubject)

        return res.status(201).json(newSubject)

        
    }


    async createVideo(req: Request, res: Response){

        const data  = videoSchema.parse(req.body);
        const idRoom = req.params.idRoom


        const room = await roomRepository.findOneBy({ id: Number(idRoom) })
        if(!room) throw new BadRequestError("Room not found")
        
        const newVideo = videoRepository.create( {
            room: room,
            title: data.title,
            url: data.url
        } )

        await videoRepository.save(newVideo)

        return res.status(201).json(newVideo)
    }

    async roomSubject(req: Request, res: Response) {
		const { subject_id } = req.body
		const { idRoom } = req.params

		
			const room = await roomRepository.findOneBy({ id: Number(idRoom) })
            if(!room) throw new BadRequestError("Room not found")
            
			const subject = await subjectRepository.findOneBy({	id: Number(subject_id)})
			if (!subject) throw new BadRequestError('Subject not found')

            const subject2 = await subjectRepository.findOneBy({id: 2})
                   
                
            const roomUpdate = {
                ...room,
                Subject: subject
            }
            
        
			await roomRepository.save(roomUpdate)

			return res.status(204).send()

	}

    async list(req: Request, res: Response){
        const rooms = await roomRepository.find({
            relations:{
                subjects: true
            }
        })
        return res.json(rooms)
    }
} 