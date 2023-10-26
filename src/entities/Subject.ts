import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Room } from "./Room";

@Entity('subjects')
export class Subject{

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @CreateDateColumn({type: 'timestamptz' })
    createdAt: Date

    @UpdateDateColumn({type: 'timestamptz'})
    updatedAt: Date

    @Column({type: 'boolean', default: true})
    enabled: boolean

    @ManyToMany(() => Room, (room) => room.subjects)
    @JoinTable({
        name: 'room_subject',
        joinColumn: {
            name: 'room_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn:{
            name: 'subject_id',
            referencedColumnName: 'id'
        }  
    })
    rooms: Room[]

}