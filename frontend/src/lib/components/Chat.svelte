<script lang="ts">
  import MessageList from '$lib/components/MessageList.svelte';
  import MessageInput from '$lib/components/MessageInput.svelte';
  import { chatStore, createChat, deleteChat, loadChat, loadChats, type Chat, type Message } from '$lib/stores/chatStore';
  import ChatList from './ChatList.svelte';
  import { onMount } from 'svelte';

  let activeChatIndex: number;
  let messages: Message[] = [];

  onMount(async () => {
    await loadChats();
    activeChatIndex = $chatStore.findIndex((chat) => chat.id == 12) || 0;
    await loadChat($chatStore[activeChatIndex].id);
    messages = $chatStore[activeChatIndex].messages;
  });

  const handleSelectChat = async (event: { detail: { index: number; }; }) => {
    activeChatIndex = event.detail.index;
    await loadChat($chatStore[activeChatIndex].id);
    messages = $chatStore[activeChatIndex].messages;
  };

  const handleCreateChat = async () => {
    await createChat();
    await loadChats();
    activeChatIndex = $chatStore.length - 1;
    await loadChat($chatStore[activeChatIndex].id);
    messages = $chatStore[activeChatIndex].messages;
  }

  const handleDeleteChat = async (event: { detail: { index: number; }; }) => {
    const index = event.detail.index;
    const chatID = $chatStore[index].id;
    await deleteChat(chatID);

    if (activeChatIndex === index) {
      activeChatIndex = 0;
    }
    
    await loadChat($chatStore[activeChatIndex].id);
    messages = $chatStore[activeChatIndex].messages;
  }
</script>

<div class="main-container">
  <div class="sidebar">
    <ChatList 
      chats={$chatStore} 
      activeChatIndex={activeChatIndex} 
      on:selectChat={handleSelectChat}
      on:createChat={handleCreateChat}
      on:deleteChat={handleDeleteChat}
  />
  </div>
  <div class="chat-container">
    <MessageList messages={$chatStore[activeChatIndex]?.messages ?? []} />
    <MessageInput chats={$chatStore} {activeChatIndex} />
  </div>
</div>

<style>
  .main-container {
    display: flex;
    height: 90vh;
    max-width: 1200px;
    width: 1200px;
    margin: auto;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
  }

  .sidebar {
    width: 30%;
    border-right: 1px solid #ddd;
    padding: 10px;
  }

  .chat-container {
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
