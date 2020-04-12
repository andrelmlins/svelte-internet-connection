<script>
  import { onMount, onDestroy } from "svelte";

  let online;

  onMount(() => {
    online = navigator.onLine;

    window.addEventListener("online", e => (online = true), false);
    window.addEventListener("offline", e => (online = false), false);
  });

  onDestroy(() => {
    window.removeEventListener("online", null);
    window.removeEventListener("offline", null);
  });
</script>

<slot status={online ? 'online' : 'offline'} {online} offline={!online} />
