<script lang="ts">
    import type { Chat } from "$lib/stores/chatStore";
    import { createEventDispatcher } from "svelte";

    export let chats: Chat[];
    export let activeChatIndex: number;

    const dispatch = createEventDispatcher();

    const handleClick = (index: number) => {
        dispatch("selectChat", { index });
    }
</script>

<div class="chat-list">
    {#each chats as chat, index}
        <div 
            role="button"
            tabindex="0"
            class="chat-item {index === activeChatIndex ? 'active' : ''}" 
            on:click={() => handleClick(index)}
            on:keydown={() => handleClick(index)}
        >
            <p>{chat.name}</p>
        </div>
    {/each}
</div>

<style>
    .chat-list {
      display: flex;
      flex-direction: column;
    }
  
    .chat-item {
      padding: 10px;
      border-bottom: 1px solid #ddd;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    .chat-item:hover {
      background-color: #f0f0f0;
    }

    .chat-item.active {
        background-color: #d0e0f0;
        font-weight: bold;
    }
  
    .chat-item p {
      margin: 0;
      font-size: 16px;
      color: #333;
    }
  </style>