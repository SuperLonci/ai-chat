<script lang="ts">
    export let on = {
      submit: () => void {}
    };
  
    export let value = '';

    function handleSubmit() {
      on.submit();
    }
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value />
    <button type="submit">Send</button>
  </form>
