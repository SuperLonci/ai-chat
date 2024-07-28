<script lang="ts">
  import MessageList from '$lib/components/MessageList.svelte';
  import MessageInput from '$lib/components/MessageInput.svelte';
  import { chatStore, loadChat, loadChats, type Chat, type Message } from '$lib/stores/chatStore';
  import ChatList from './ChatList.svelte';
  import { onMount } from 'svelte';

  let activeChatIndex: number;
  let messages: Message[] = [];

  onMount(async () => {
    await loadChats();
    activeChatIndex = $chatStore.findIndex((chat) => chat.id == 12) || 0;
    await loadChat($chatStore[activeChatIndex].id);
    messages = $chatStore[activeChatIndex].messages;
  })

</script>

<div class="chat-container">
  <!-- <ChatList {chats} /> -->
  <MessageList messages={$chatStore[activeChatIndex]?.messages ?? []} />
  <MessageInput chats={$chatStore} {activeChatIndex} />
</div>

<style>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 90vh;
    max-width: 600px;
    margin: auto;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
  }
</style>
