import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Video } from "./Video";
import { Subject } from "./Subject";



@Entity('rooms')
export class Room{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @Column({type: 'text'})
    description: string

    @CreateDateColumn({type: 'timestamptz' })
    createdAt: Date

    @UpdateDateColumn({type: 'timestamptz'})
    updatedAt: Date

    @Column({type: 'boolean', default: true})
    enabled: boolean

    @OneToMany(() => Video, video => video.room)
    videos: Video[]

    @ManyToMany(()=> Subject, subject => subject.rooms)
    subjects: Subject[]
}
