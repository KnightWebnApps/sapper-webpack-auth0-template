<script>
    export let onClick = () => {}
</script>

<button on:click={onClick}>
    <slot>Press Me</slot>
</button>

<style>
    button {
        border: none;
        border-radius: var(--border-radius);
        padding: .7em;
        font-size: 14px;
    }
</style>

