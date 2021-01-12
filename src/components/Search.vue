<template>
    <div class="search">
        <div class="search_title">
            <h2>艺人</h2>
        </div>
        <div id="search_artists">
            <div class="search_artists" v-for="item in artists" :key="item.name">
                <router-link :to="{name: 'Artist', params: {id: item.id}}"><img :src="item.img1v1Url + '?param=120y120'" :alt="item.name" :title="item.name"></router-link>
                <router-link :to="{name: 'Artist', params: {id: item.id}}">{{item.name}}</router-link>
            </div>
        </div>
        <div class="search_title">
            <h2>专辑</h2><router-link :to="{name: 'MoreAlbum', params: {keywords: this.$route.params.keywords}}">查看全部</router-link>
        </div>
        <div class="flex_layout">
            <div class="albums" v-for="item in albums" :key="item.names">
                <router-link :to="{name: 'Album', params: {id: item.id}}">
                    <img class="album_cover" v-lazy="item.picUrl + '?param=150y150'" :alt="item.name" :title="item.name">
                </router-link>
                <div class="info">
                    <router-link :to="{name: 'Album', params: {id: item.id}}">{{item.name}}</router-link>
                    <router-link :to="{name: 'Artist', params: {id: item.artist.id}}">{{item.artists[0].name}}</router-link>
                </div>
            </div>
        </div>
        <div class="search_title">
            <h2>歌曲</h2><router-link to="">查看全部</router-link>
        </div>
        <div class="helf_layout">
            <div class="new_song" v-for="item in songs" :key="item.names">
                <div class="play_music">
                    <img src="item.picUrl + '?param=50y50'">
                    <svg @click="play(item.id)" class="play_button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"></path></svg>
                </div>
                <div class="info">
                    <router-link to="">{{item.name}}</router-link>
                    <router-link :to="{name: 'Artist', params: {id: item.artists[0].id}}">{{item.artists[0].name}}</router-link>
                </div>
            </div>
        </div>
        <div class="search_title">
            <h2>音乐视频</h2><router-link to="">查看全部</router-link>
        </div>
        <div class="flex_layout">
            <div class="albums" v-for="item in mvs" :key="item.names">
                <router-link :to="{name: 'MV', params: {id: item.id}}">
                    <img class="album_cover" v-lazy="item.cover + '?param=159y90'" :alt="item.name" :title="item.name">
                </router-link>
                <div class="info">
                    <router-link :to="{name: 'MV', params: {id: item.id}}">{{item.name}}</router-link>
                    <router-link :to="{name: 'Artist', params: {id: item.artistId}}">{{item.arTransName}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import search from '../axios/search'
export default search
</script>
<style>
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