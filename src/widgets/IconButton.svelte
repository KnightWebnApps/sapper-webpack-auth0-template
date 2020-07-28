<script>
    export let onClick = () => {}
</script>

<button on:click={onClick}>
    <slot name="icon">
        <svg style="width:16px;height:16px" viewBox="0 0 16 16">
            <path fill="currentColor" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
        </svg>
    </slot>
    <div class="text">
        <slot>Press Me</slot>

    </div>
</button>

<style>
    button {
        border-radius: var(--border-radius);
        border: none;
        padding: .7em;
        display: flex;
        align-items: center;
    }

    .text {
        margin-left: .7em;
        font-size: 14px;
    }
</style>