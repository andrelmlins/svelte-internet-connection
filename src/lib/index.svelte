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

<style>
  .button {
    border: none;
    box-shadow: none;
    background-color: #00838f;
    color: #fff;
    padding: 0px 20px;
    font-size: 20px;
    height: 40px;
  }
</style>

<button class="button">Connection: {online ? 'Online' : 'Offline'}</button>
