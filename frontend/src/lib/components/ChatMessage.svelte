<script lang="ts">
    export let content: string;
    export let author: string;
</script>

<div class="message {author.toLowerCase()}">
    <p>{content}</p>
</div>

<style>
    .message {
        margin-bottom: 10px;
        padding: 5px;
        border-radius: 10px;
        max-width: 80%;
    }
    .user {
        background-color: #daf8cb;
        align-self: flex-end;
        margin-left: auto; /* Push message to the right */
    }
    .ai {
        background-color: #f1f1f1;
        align-self: flex-start;
        margin-right: auto; /* Push message to the left */
    }
</style>
  