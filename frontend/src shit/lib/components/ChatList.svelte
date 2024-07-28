<script lang="ts">
  import ChatMessage from './ChatMessage.svelte';
  import type { Message } from '../stores/messages';

  export let messages: Message[] = [];
</script>

<ul>
  {#each messages as message}
    <ChatMessage message={message} />
  {/each}
</ul>
