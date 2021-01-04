<template>
    <div class="audioplayer bmbl">
        <img src="" alt="">
        <audio controls src=""></audio>
    </div>
</template>
<script>
export default {
    name: 'audioplayer'
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