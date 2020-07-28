<script>
    export let href = '';
</script>

<a {href}>
    <slot>Link</slot>
</a>

<style>
    a {
        padding: .7em;
        border-radius: var(--border-radius);
    }
</style>

