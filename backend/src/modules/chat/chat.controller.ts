import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatMessageDto } from './dto/create-chat-message.dto';
import { ChatMessage } from './entities/chat-message.entity';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('messages')
  @UsePipes(ValidationPipe)
  async createMessage(@Body() createChatMessageDto: CreateChatMessageDto): Promise<ChatMessage> {
    return this.chatService.createChatMessage(createChatMessageDto);
  }
}
