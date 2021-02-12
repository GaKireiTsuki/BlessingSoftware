<template>
    <div class="search" v-wechat-title="'BS Music Search - ' + terms">
        <div class="search_title" v-show="artists && artists.length>0">
            <h2>艺人</h2>
        </div>
        <div id="search_artists" v-show="artists && artists.length>0">
            <div class="search_artists" v-for="(item, index) in artists" :key="index">
                <router-link :to="{name: 'Artist', params: {id: item.id, name: item.name}}"><img :src="item.img1v1Url + '?param=120y120'" :key="item.img1v1Url + '?param=120y120'" :alt="item.name" :title="item.name"></router-link>
                <router-link :to="{name: 'Artist', params: {id: item.id, name: item.name}}">{{item.name}}</router-link>
            </div>
        </div>
        <div class="search_title" v-show="albums && albums.length>0">
            <h2>专辑</h2><!-- <router-link to="">查看全部</router-link> -->
        </div>
        <flexLayout ref="flexLayout" :albums="albums" v-show="albums && albums.length>0"></flexLayout>
        <div class="search_title" v-show="songs && songs.length>0">
            <h2>歌曲</h2>
        </div>
        <helfLayout ref="helfLayout" :songs="songs" v-show="songs && songs.length>0"></helfLayout>
        <div class="search_title" v-show="mvs && mvs.length>0">
            <h2>音乐视频</h2>
        </div>
        <flexLayoutMV ref="flexLayoutMV" :mvs="mvs" v-show="mvs && mvs.length>0"></flexLayoutMV>
    </div>
</template>
<script>
import search from './search'
export default search
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
    .search{
        padding-top: 32px;
    }
    .search_title a{
        font-size: 15px;
        color: var(--redFontColor);
    }
    .search_title a:hover{
        text-decoration: underline;
    }
    .search_artists a:hover{
        text-decoration: underline;
    }
    .search_artists a{
        width: 100%;
        text-align: center;
    }
    #search_artists{
        display: flex;
        column-gap: 20px;
        padding: 15px 0px;
    }
    .search_artists{
        display: grid;
        justify-items: center;
        font-size: 12px;
        row-gap: 4px;
        grid-template-rows: 120px 46px;
    }
    .search_artists img{
        border-radius: 120px;
    }
    .search_artists img:hover{
        filter: brightness(80%);
        transition: 0.1s ease-in;
    }
    .search .helf_layout{
        grid-template-rows: repeat(3,1fr);
        gap: 0px 20px;
    }
</style>