<script>
  import MessageList from '$lib/components/MessageList.svelte';
  import MessageInput from '$lib/components/MessageInput.svelte';
  import { chatStore } from '$lib/stores/chatStore';

  let messages = $chatStore;
</script>

<div class="chat-container">
  <MessageList {messages} />
  <MessageInput />
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
