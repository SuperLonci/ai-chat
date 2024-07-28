import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatMessageDTO } from './dto/create-chat-message.dto';
import { Chat } from './entities/chat.entity';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async getChats(): Promise<Chat[]> {
    return this.chatService.getChats();
  }

  @Get(':id')
  async getChat(@Param() params: { id: number }): Promise<Chat> {
    return this.chatService.getChat(params.id);
  }


  @Post(':id/messages')
  @UsePipes(ValidationPipe)
  async createMessage(@Body() createChatMessageDto: CreateChatMessageDTO, @Param() params: { id: number }): Promise<Chat> {
    return this.chatService.createChatMessage(createChatMessageDto, params.id);
  }

  @Post()
  async createChat(): Promise<Chat> {
    return this.chatService.createChat();
  }

}
