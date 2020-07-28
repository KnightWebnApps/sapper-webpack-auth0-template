<script>
    export let name;
    export let label;
    export let value;
    export let isEmail = false;
    export let obscureText = false;
</script>

<label for={ name }>
    {#if isEmail}
        <input type="email" { name } bind:value >
    {:else if  obscureText}
        <input type="password" { name } bind:value >
    {:else}
        <input type="text" { name } bind:value >
    {/if}
    { label }
</label>


<style>

    label {
        display: flex;
        align-items: center;
    }

    input {
        border-radius: var(--border-radius);
        background-color: var(--gray);
    }

</style>

