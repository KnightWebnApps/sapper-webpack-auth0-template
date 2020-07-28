<svelte:head>
  <title>Sapper Auth0 </title>
</svelte:head>

<script context="module">
  export function preload(page) {
    const id = page.params.id;
    console.log(id);
    return { id };
  }
</script>

<script>
  export let id;
</script>

<h2>Callback Works! {id.toString()}</h2>

<style>

</style>
