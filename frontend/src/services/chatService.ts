import type { Chat } from "$lib/stores/chatStore";

export async function sendMessageToBackend(chatId: number ,message: string): Promise<Chat> {
  const response = await fetch(`http://localhost:3000/chat/${chatId}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message to backend');
  }

  const data = await response.json();
  return data;
}

export async function fetchChats(): Promise<Chat[]> {
  const response = await fetch('http://localhost:3000/chat');
  if (!response.ok) {
    throw new Error('Failed to fetch chats');
  }
  return await response.json();
}

export async function fetchChat(chatId: number): Promise<Chat> {
  const response = await fetch(`http://localhost:3000/chat/${chatId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch chat');
  }
  return await response.json();
}

export async function createChatInBackend(): Promise<Chat> {
  const response = await fetch('http://localhost:3000/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to create chat');
  }
  return await response.json();
}