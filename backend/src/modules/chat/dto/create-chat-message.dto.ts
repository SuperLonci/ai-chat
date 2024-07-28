import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChatMessageDTO {
  @IsNotEmpty()
  @IsString()
  message: string;
}
