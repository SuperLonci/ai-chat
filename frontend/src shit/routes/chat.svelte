<script lang="ts">
    import { onMount } from 'svelte';
    import ChatList from '../lib/components/ChatList.svelte';
    import ChatInput from '../lib/components/ChatInput.svelte';
    import { messages } from '../lib/stores/messages';
    import type { Message } from '../lib/stores/messages';
    import { sendMessage, fetchMessages } from '../lib/api';


    let newMessage = '';

    async function handleSubmit() {
    const response = await sendMessage(newMessage);
    messages.update((prevMessages) => [...prevMessages, response.data as Message]);
    newMessage = '';
    }

    async function loadMessages() {
    const messagesData = await fetchMessages();
    messages.set(messagesData as Message[]);
    }

    onMount(() => {
    loadMessages();
    });
</script>

<div class="chat-container">
    <ChatList messages={$messages} />
    <ChatInput on:submit={handleSubmit} bind:value={newMessage} />
</div>