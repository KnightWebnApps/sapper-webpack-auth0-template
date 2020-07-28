<script>
    export let name;
    export let label;
    export let checked = false;
</script>

<label for={name}>
    <input type="checkbox" bind:checked>
    { label }
</label>

<style>
    label {
        display: flex;
        align-items: center;    
    }
</style>