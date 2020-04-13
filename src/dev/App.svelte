<script>
  import InternetConnection from "../lib/InternetConnection.svelte";

  let code = `
<InternetConnection let:status>
  Status: {status}
</InternetConnection>
  `;
</script>

<style>
  :global(body) {
    padding: 0px;
    background-color: var(--status);
  }
  main {
    padding: 1em;
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: var(--status);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 3em;
    margin-bottom: 0px;
    text-shadow: 1px 1px 2px black;
  }

  h4 {
    color: white;
    text-shadow: 1px 1px 2px black;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .fas {
    color: white;
    font-size: 15em;
  }

  pre {
    background-color: white;
    padding: 0px 20px;
    text-align: left;
    border-radius: 3px;
    font-size: 20px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
</style>

<InternetConnection let:online>
  <main style="--status:{online ? '#4caf50' : '#f44336'}">
    <h1>Svelte Internet Connection</h1>
    <h4>Connect and disconnect the internet to view the example:</h4>
    {#if online}
      <i class="fas fa-check-circle fa-7x check" />
    {:else}
      <i class="fas fa-stop-circle fa-7x stop" />
    {/if}
    <br />
    <pre>
      <code class="html">{code}</code>
    </pre>
  </main>
</InternetConnection>
