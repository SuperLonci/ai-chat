import { writable } from 'svelte/store';
import { sendMessageToBackend } from '../../services/chatService';

// Define the message type
type Message = {
  sender: 'user' | 'bot';
  text: string;
};

// Explicitly set the type of chatStore
export const chatStore = writable<Message[]>([]);

export async function sendMessage(message: string) {
  chatStore.update(messages => [...messages, { sender: 'user', text: message }]);

  try {
    const botResponse = await sendMessageToBackend(message);
    chatStore.update(messages => [...messages, { sender: 'bot', text: botResponse }]);
  } catch (error) {
    console.error('Error sending message', error);
    chatStore.update(messages => [...messages, { sender: 'bot', text: 'Error: Could not retrieve response' }]);
  }
}
