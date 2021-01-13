<template>
    <div class="loading hmbl">
        LOADING...
    </div>
</template>
<script>
export default {
    name: 'loading'
}
</script>
<style>
    .loading{
        z-index: 9999;
        background: #000;
        color: aliceblue;
        display: grid;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        position: fixed;
    }
</style>