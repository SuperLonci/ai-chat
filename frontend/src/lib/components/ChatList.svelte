<script lang="ts">
    import { type Chat } from "$lib/stores/chatStore";
    import { createEventDispatcher } from "svelte";

    export let chats: Chat[];
    export let activeChatIndex: number;

    const dispatch = createEventDispatcher();

    const handleClick = (index: number) => {
      dispatch("selectChat", { index });
    }

    const handleKeyDown = (event: KeyboardEvent, index: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
            handleClick(index);
        }
    };

    const createChat = () => {
      dispatch("createChat");
    }

</script>

<div class="chat-list-container">
  <div class="header">
    <h2>Chats</h2>
    <button class="add-chat-button" on:click={createChat} aria-label="Create new chat">
        +
    </button>
  </div>
<div class="chat-list">
  </div>
    {#each chats as chat, index}
        <div 
            role="button"
            tabindex="0"
            class="chat-item {index === activeChatIndex ? 'active' : ''}" 
            on:click={() => handleClick(index)}
            on:keydown={(event) => handleKeyDown(event, index)}
        >
            <p>{chat.name}</p>
        </div>
    {/each}
</div>

<style>
  .chat-list-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      overflow: hidden;
  }
  .chat-list {
      flex: 1;
      padding: 0;
      margin: 0;
      overflow-y: auto;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    background-color: #f9f9f9;
  }

  .header h2 {
    margin: 0;
    font-size: 18px;
    color: #333;
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

  .add-chat-button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
  }

  .add-chat-button:hover {
    background-color: #0056b3;
  }
</style>