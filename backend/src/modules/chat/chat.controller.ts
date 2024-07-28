import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dtos/create-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.createChat(createChatDto);
  }
}
