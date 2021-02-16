<template>
    <div class="music" v-wechat-title="'BS Music'">
        <div class="banner">
            <div id="banner" v-for="(item, index) in banners" :key="index">
                <div class="banner_info">
                    <p>{{item.typeTitle}}</p>
                    <h2></h2>
                    <h2></h2>
                </div>
                <img :src="item.imageUrl | Https" :key="item.imageUrl | Https" :alt="item.name" :title="item.name">
            </div>
        </div>
        <div id="new_song_helf">
            <helfLayout ref="helfLayout" :songs="result" class="new_song_helf"></helfLayout>
        </div>
        <div id="new_album_helf">
            <category ref="category" :category="category" :option="area" @update="area = $event"></category>
            <flexLayout ref="flexLayout" :albums="albums" class="new_album_helf"></flexLayout>
        </div>
    </div>
</template>
<script>
import music from './music'
export default music
</script>
<style>
    .new_song .add_play_list{
        top: 0;
        right: 0;
    }
    .new_song svg{
        opacity: 0;
        transform: scale(0.7);
        transition: all .2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
    #banner img{
        width: 100%;
        border-radius: 4px;
    }
    .banner{
        display: grid;
        overflow-y: hidden;
        column-gap: 20px;
        grid-auto-flow: column;
        grid-auto-columns: calc((100% - 1 * 20px)/ 2);
        padding: 15px 0;
    }
    .banner::-webkit-scrollbar{
        height: 4px;
    }
    .new_album_helf{
        padding: 25px 0px;
        margin-bottom: 25px;
        grid-template-rows: repeat(2,1fr) !important;
    }
    .new_song{
        display: flex;
        padding: 7.5px 24px 7.5px 0;
        border-top: 1px solid rgba(0,0,0,.14901960784313725);
    }
    .new_song_helf{
        padding: 25px 0px;
        margin-bottom: 25px;
        grid-template-rows: repeat(4,1fr) !important;
        gap: 0px 20px !important;
    }
</style>