<template>
    <div class="search" v-wechat-title="'BS Music Search - ' + query">
        <div class="search_title" v-show="artists && artists.length>0">
            <h2>艺人</h2>
        </div>
        <div id="search_artists" v-show="artists && artists.length>0">
            <div class="search_artists" v-for="(item, index) in artists" :key="index">
                <router-link :to="{name: 'Artist', params: {id: item.id}}"><img :src="item.img1v1Url + '?param=120y120'" :key="item.img1v1Url + '?param=120y120'" :alt="item.name" :title="item.name"></router-link>
                <router-link :to="{name: 'Artist', params: {id: item.id}}">{{item.name}}</router-link>
            </div>
        </div>
        <div class="search_title" v-show="albums && albums.length>0">
            <h2>专辑</h2><router-link :to="{name: 'MoreAlbum', params: {keywords: this.query}}">查看全部</router-link>
        </div>
        <div class="flex_layout" v-show="albums && albums.length>0">
            <div class="albums" v-for="(item, index) in albums" :key="index">
                <router-link :to="{name: 'Album', params: {id: item.id}}">
                    <img class="album_cover" v-lazy="item.picUrl + '?param=150y150'" :key="item.picUrl + '?param=150y150'" :alt="item.name" :title="item.name">
                </router-link>
                <div class="info">
                    <router-link :to="{name: 'Album', params: {id: item.id}}">{{item.name}}</router-link>
                    <span>
                        <router-link :to="{name: 'Artist', params: {id: item.id}}" v-for="(item, index) in item.artists" :key="index">{{item.name}}</router-link>
                    </span>
                </div>
            </div>
        </div>
        <div class="search_title" v-show="songs && songs.length>0">
            <h2>歌曲</h2>
        </div>
        <div class="helf_layout" v-show="songs && songs.length>0">
            <div class="new_song" v-for="(item,index) in songs" :key="index">
                <div class="play_music">
                    <img v-lazy="'?param=50y50'" :key="'?param=50y50'">
                    <svg @click="play(item.id)" id="play_button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"></path></svg>
                </div>
                <div class="info">
                    <router-link to="">{{item.name}}</router-link>
                    <span>
                        <router-link :to="{name: 'Artist', params: {id: item.id}}" v-for="(item, index) in item.artists" :key="index">{{item.name}}</router-link>
                    </span>
                </div>
                <div @click="playSong(item)" class="add_play_list">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="glyph-add" aria-hidden="true"><path d="M15.169 21.24v-4.423h-4.387a.824.824 0 01-.818-.813c0-.448.379-.821.818-.821h4.387V10.76c0-.44.38-.796.827-.796.447 0 .827.356.827.796v4.423h4.395c.447 0 .818.373.818.821a.82.82 0 01-.818.813h-4.395v4.423c0 .431-.38.796-.827.796-.447 0-.827-.365-.827-.796z"></path></svg>
                </div>
            </div>
        </div>
        <div class="search_title" v-show="mvs && mvs.length>0">
            <h2>音乐视频</h2>
        </div>
        <div class="flex_layout" v-show="mvs && mvs.length>0">
            <div class="albums mv" v-for="(item, index) in mvs" :key="index">
                <router-link :to="{name: 'MV', params: {id: item.id}}">
                    <img class="album_cover" v-lazy="item.cover + '?param=159y90'" :key="item.cover + '?param=159y90'" :alt="item.name" :title="item.name">
                </router-link>
                <div class="info">
                    <router-link :to="{name: 'MV', params: {id: item.id}}">{{item.name}}</router-link>
                    <span>
                        <router-link :to="{name: 'Artist', params: {id: item.id}}" v-for="(item, index) in item.artists" :key="index">{{item.name}}</router-link>
                    </span>
                </div>
            </div>
        </div>
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
        color: #fa233b;
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
        box-sizing: border-box;
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