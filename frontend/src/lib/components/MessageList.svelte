<script>
  export let messages;
</script>

<div class="message-list">
  {#each messages as message}
    <div class="message {message.sender}">
      <p>{message.text}</p>
    </div>
  {/each}
</div>

<style>
  .message-list {
    flex: 1;
    padding: 20px;
    overflow-y: scroll;
  }
  .message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
  }
  .user {
    background-color: #daf8cb;
    align-self: flex-end;
  }
  .bot {
    background-color: #f1f1f1;
    align-self: flex-start;
  }
</style>
