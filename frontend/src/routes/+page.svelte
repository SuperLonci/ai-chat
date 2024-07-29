<script>
import Chat from '$lib/components/Chat.svelte';
</script>

<div class="page-container">
  <div class="top-bar">
    <h1>Welcome to AI Chat</h1>
  </div>
  <div class="content">
    <Chat />
  </div>
</div>

<style>
  :global(body) {
    flex-direction: column;
    margin: 0;
    font-family: sans-serif;
    height: 100vh;
  }

    .page-container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .top-bar {
    background-color: #f8f8f8; /* Light grey background for the top bar */
    padding: 10px 7%;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  .content {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  h1 {
    margin: 0;
    font-size: 24px;
  }
</style>
  