<script>
    export let title = '';
    export let description = '';
    export let src;
    export let alt;
</script>

<div class="card">
    <h3>{ title }</h3>
    <p>{ description }</p>
    <figure>
        <img {src} {alt} />
    </figure>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        padding: 1em;
        justify-content: space-between;
        border-radius: var(--border-radius);
    }

</style>

