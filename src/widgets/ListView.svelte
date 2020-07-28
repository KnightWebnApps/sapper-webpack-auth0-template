<script>
    export let items = Array();
</script>
<div class="list">
    {#each items as item}
        <slot prop={item}>{ item.toString() }</slot>
    {:else}
        <slot name="empty">
            <h1>No Items Yet!</h1>
        </slot>
    {/each}
</div>

<style>
    .list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

