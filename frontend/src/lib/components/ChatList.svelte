<script lang="ts">
    import type { Chat } from "$lib/stores/chatStore";

    export let chats: Chat[];
</script>

<div class="chat-list">
    {#each chats as chat}
        <div class="chat-item">
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
  
    .chat-item p {
      margin: 0;
      font-size: 16px;
      color: #333;
    }
  </style>