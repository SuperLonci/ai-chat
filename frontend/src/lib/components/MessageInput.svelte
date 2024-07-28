<script lang="ts">
    import { chatStore, sendMessage, type Chat } from '$lib/stores/chatStore';

    let input = '';
    export let chats: Chat[];
    export let activeChatIndex: number;
  
    function handleSend() {
      if (input.trim()) {
        sendMessage(chats[activeChatIndex].id, input);
        input = '';
      }
    }
  </script>
  
  <div class="input-container">
    <input type="text" bind:value={input} placeholder="Type a message..." />
    <button on:click={handleSend}>Send</button>
  </div>
  
  <style>
    .input-container {
      display: flex;
      padding: 10px;
      border-top: 1px solid #ddd;
    }
    input {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 5px;
      margin-right: 10px;
    }
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }
  </style>
  