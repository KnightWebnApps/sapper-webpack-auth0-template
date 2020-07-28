<script>
    export let isFullScreen = false;
</script>

<div class:full-screen={isFullScreen} class="center">
    <slot></slot>
</div>

<style>
    .center {
        display: grid;
        place-items: center;
    }

    .full-screen {
        height: 100%;
    }
</style>

