import { writable } from 'svelte/store';
import { createChatInBackend, deleteChatInBackend, fetchChat, fetchChats, sendMessageToBackend } from '../../services/chatService';

export type Chat = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  messages: Message[];
}
export type Message = {
  id: number;
  author: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export const chatStore = writable<Chat[]>([]);

export async function sendMessage(chatId: number, message: string) {
  const newChat = await sendMessageToBackend(chatId, message);
  chatStore.update((chats) => {
    const index = chats.findIndex((chat) => chat.id === chatId);
    chats[index] = newChat;
    return chats;
  });
}

export async function loadChats() {
  const chats = await fetchChats();
  chatStore.set(chats);
}

export async function loadChat(chatId: number) {
  const chat = await fetchChat(chatId);
  chatStore.update((chats) => {
    const index = chats.findIndex((chat) => chat.id === chatId);
    chats[index] = chat;
    return chats;
  });
  return chat;
}

export async function createChat() {
  await createChatInBackend();
  const chats = await fetchChats();
  chatStore.set(chats);
}

export async function deleteChat(chatId: number) {
  await deleteChatInBackend(chatId);
  const chats = await fetchChats();
  chatStore.set(chats);
}
