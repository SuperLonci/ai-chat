<script lang="ts">
  import type { Message } from "$lib/stores/chatStore";
  import { onMount, afterUpdate } from "svelte";
    import ChatMessage from "./ChatMessage.svelte";

  export let messages: Message[];

  // Handle scroll to bottom
  let messageListContainer: HTMLDivElement;

  const scrollToBottom = () => {
    if (messageListContainer) {
      messageListContainer.scrollTop = messageListContainer.scrollHeight;
    }
  };

  onMount(() => {
    scrollToBottom(); // Scroll to bottom when component is mounted
  });

  afterUpdate(() => {
    scrollToBottom(); // Scroll to bottom after each update
  });

</script>

<div class="message-list" bind:this={messageListContainer}>
  {#each messages as message}
    <div class="message {message.author.toLowerCase()}">
       <ChatMessage content={message.content} author={message.author} />
    </div>
  {/each}
</div>

<style>
  .message-list {
    flex: 1;
    padding: 20px;
    overflow-y: scroll;
  }
</style>
