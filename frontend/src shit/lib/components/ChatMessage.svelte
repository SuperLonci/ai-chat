<script lang="ts">
  import type { Message } from '../stores/messages';

  export let message: Message;
</script>

<li>
  {message.content}
</li>
