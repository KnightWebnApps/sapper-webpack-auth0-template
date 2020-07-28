<script>
    export let items = Array()
</script>

<div class="grid">

    {#each items as item}

        <slot prop={item}></slot>

    {/each}

</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1em;
    }
</style>