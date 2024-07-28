import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { ChatMessage } from './chat-message.entity';

@Entity()
export class ChatResponse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @OneToOne(() => ChatMessage, (message) => message.response)
    chatMessage: ChatMessage;
}
