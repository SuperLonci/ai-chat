import { writable } from 'svelte/store';

export interface Message {
  id: number;
  content: string;
}

export const messages = writable<Message[]>([]);
