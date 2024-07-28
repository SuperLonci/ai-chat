import type { MessageDTO } from './messageDTO';

export interface ChatDTO {

    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    messages: MessageDTO[];

}
  