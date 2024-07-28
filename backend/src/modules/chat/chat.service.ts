import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatMessage } from './entities/chat-message.entity';
import { HuggingFaceService } from './huggingface.service';
import { CreateChatMessageDto } from './dto/create-chat-message.dto';

@Injectable()
export class ChatService {
    constructor(
        @InjectRepository(ChatMessage)
        private chatMessageRepository: Repository<ChatMessage>,
        private huggingFaceService: HuggingFaceService
    ) {}

    async createChatMessage(createChatMessageDto: CreateChatMessageDto): Promise<ChatMessage> {
        const chatMessage = new ChatMessage();
        chatMessage.content = createChatMessageDto.content;
        await this.chatMessageRepository.save(chatMessage);

        const response = await this.huggingFaceService.generateText(createChatMessageDto.content);
        chatMessage.response = response;
        await this.chatMessageRepository.save(chatMessage);

        return chatMessage;
    }
}
