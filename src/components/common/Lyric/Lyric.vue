<template>
    <div class="lyric bmbl">
        <p v-show="lyric && lyric.length>0">{{lyric}}</p>
        <p v-show="lyric === ''">暂无歌词</p>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    name: 'lyric',
    computed: {
        ...mapState(['lyric'])
    }
}
</script>
<style>
    .lyric{
        background: hsl(0deg 0% 100% / 72%);
        backdrop-filter: saturate(180%) blur(20px);
        border-top: 1px solid #00000012;
        border-left: .5px solid #00000026;
        box-sizing: border-box;
        width: 300px;
        height: calc(100vh - 97px);
        padding: 10px 20px;
        position: fixed;
        bottom: 53px;
        right: 0;
        display: none;
        overflow-y: auto;
    }
    .lyric p:last-child{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .open_lyric{
        color: #1d1d1f;
        font-size: 14px;
        width: 28px;
        height: 22px;
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-radius: 4px;
        cursor: pointer;
        border: none;
        background: none;
        outline: none;
    }
</style>