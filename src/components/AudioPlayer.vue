<template>
    <div class="audioplayer bmbl">
        <img :src="img + '?param=50y50'" alt="">
        <audio autoplay controls :src="url"></audio>
    </div>
</template>
<script>
export default {
    name: 'audioplayer',
    computed: {
        url() {
            return this.$store.state.url
        },
        img() {
            return this.$store.state.img
        }
    }
}
</script>
<style>
    .audioplayer{
        position: sticky;
        bottom: 0;
        width: 100%;
        height: 54px;
        display: flex;
        justify-content: center;
        border-top: 1px solid rgba(0,0,0,0.16);
    }
    .audioplayer img:nth-of-type(1){
        height: 100%;
        padding: 4px;
        border-radius: 8px;
        box-sizing: border-box;
    }
</style>