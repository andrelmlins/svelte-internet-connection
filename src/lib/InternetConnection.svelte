<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let online;

  $: dispatch('change', {
    status: online ? 'online' : 'offline',
    online,
    offline: !online
  });

  onMount(() => {
    online = navigator.onLine;

    window.addEventListener('online', e => (online = true), false);
    window.addEventListener('offline', e => (online = false), false);
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('online', null);
      window.removeEventListener('offline', null);
    }
  });
</script>

<slot status={online ? 'online' : 'offline'} {online} offline={!online} />
