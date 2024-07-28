import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Chat } from './chat.entity';

@Entity()
export class ChatMessage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    author: string;

    @Column({ type:"longtext" })
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Chat, (chat) => chat.messages)
    chat: Chat;
}
