import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatMessage } from './entities/chat-message.entity';
import { Chat } from './entities/chat.entity';
import { HuggingFaceService } from './ai-provider/huggingface.service';
import { CreateChatMessageDto } from './dto/create-chat-message.dto';

@Injectable()
export class ChatService {
    constructor(
        @InjectRepository(ChatMessage)
        private chatMessageRepository: Repository<ChatMessage>,

        @InjectRepository(Chat)
        private chatRepository: Repository<Chat>,
        private huggingFaceService: HuggingFaceService
    ) {}

    async createChatMessage(createChatMessageDto: CreateChatMessageDto, chatId: number): Promise<Chat> {
        const chat = await this.chatRepository.findOne( { where: { id: chatId}, relations: { messages: true} } );
        const chatMessage = new ChatMessage();
        chatMessage.author = "User";
        chatMessage.content = createChatMessageDto.message;
        chat.messages.push(chatMessage);

        const response = await this.huggingFaceService.generateText(createChatMessageDto.message)
        const responseMessage = new ChatMessage();
        responseMessage.content = response;
        responseMessage.author = "AI";
        chat.messages.push(responseMessage)

        await this.chatRepository.save(chat);
        return chat;
    }

    async createChat(): Promise<Chat> {
        const chat = new Chat();
        chat.name = 'New Chat ' + Math.floor(Math.random() * 1000);
        chat.messages = [];
        await this.chatRepository.save(chat);
        return chat;
    }

    async deleteChat(chatId: number): Promise<void> {
        await this.chatRepository.delete(chatId);
    }

    async getChat(id: number): Promise<Chat> {
        const response = await this.chatRepository.findOneBy( { id } );
        return response
    }

    async getChats(): Promise<Chat[]> {
        const response = await this.chatRepository.find();
        return response
    }
}
