import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./Video";
import { Subject } from "./Subject";
import { subtle } from "crypto";


@Entity('rooms')
export class Room{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @OneToMany(() => Video, (video) => video.room)
    videos: Video[]

    @ManyToMany(()=> Subject, (subject) => subject.rooms)
    subjects: Subject[]
}