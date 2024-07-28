import { Controller, Post, Body, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatMessageDto } from './dto/create-chat-message.dto';
import { Chat } from './entities/chat.entity';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post(':id/messages')
  @UsePipes(ValidationPipe)
  async createMessage(@Body() createChatMessageDto: CreateChatMessageDto, @Param() params: { id: number }): Promise<Chat> {
    return this.chatService.createChatMessage(createChatMessageDto, params.id);
  }

  @Post()
  async createChat(): Promise<Chat> {
    return this.chatService.createChat();
  }

}
