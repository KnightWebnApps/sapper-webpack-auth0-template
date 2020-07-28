<script>
    // your script goes here
</script>

<div class="parent">
    <div>
        <slot name="sidebar"></slot>
    </div>
    <div>
        <slot></slot>
    </div>
</div>

<style>
    .parent {
        display: grid;
        grid-template-columns: minmax(150px, 25%) 1fr;
    }
</style>

