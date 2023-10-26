import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Room } from "./Room";


@Entity('videos')
export class Video {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    title: string

    @Column({type: 'text'})
    url: string

    @CreateDateColumn({type: 'timestamptz' })
    createdAt: Date

    @UpdateDateColumn({type: 'timestamptz'})
    UpdatedAt: Date

    @Column({type: 'boolean', default: true})
    enabled: boolean
    
    @ManyToOne(() => Room, (room) => room.videos)
    @JoinColumn({name: 'room_id'})
    room: Room
}