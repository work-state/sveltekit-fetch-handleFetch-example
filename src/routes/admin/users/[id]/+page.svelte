<script>
  /** @type {import('./$types').PageData} */
  export let data;

  async function show() {
    await fetch('/api/users/1');
  }
</script>

{JSON.stringify(data)}
<br />
<button on:click={show}>show</button>
