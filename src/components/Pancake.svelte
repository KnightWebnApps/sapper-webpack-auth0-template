<script>
    export let isStretched = false;
</script>

<div class="parent">

    <div class:is-stretched={isStretched} class="box">
        <!-- TODO Marketing Section 1 -->
    </div>

    <div class:is-stretched={isStretched} class="box">
        <!-- TODO Marketing Section 2 -->
    </div>

    <div class:is-stretched={isStretched} class="box">
        <!-- TODO Marketing Section 3 -->
    </div>

</div>

<style>
    
    .parent {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .box {
        flex: 0 1 150px;
        margin: 1em;
    }

    .is-stretched {
        flex: 1 1 150px;
    }

</style>

