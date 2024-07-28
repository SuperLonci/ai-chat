<script lang="ts">
    import type { Chat } from "$lib/stores/chatStore";

    export let chats: Chat[];
</script>

<div class="message-list">
    {#each chats as chat}
        <div class="message {chat}">
        <p>{chat.name}</p>
        </div>
    {/each}
</div>
