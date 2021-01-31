<template>
    <div class="artist">
        <div class="artist_info">
            <img v-lazy="img1v1Url + '?param=190y190'" :alt="name" :title="name">
            <h1>{{name}}</h1>
        </div>
        <div class="search_title">
            <h2>歌曲排行</h2>
        </div>
        <div class="helf_layout">
            <div class="new_song" v-for="item in hotSongs" :key="item.names">
                <div class="play_music">
                    <img v-lazy="item.al.picUrl + '?param=50y50'" :alt="item.name" :title="item.name">
                    <svg @click="play(item.id)" class="play_button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"></path></svg>
                </div>
                <div class="info">
                    <router-link to="">{{item.name}}</router-link>
                    <span>
                        <router-link :to="{name: 'Artist', params: {id: items.id}}" v-for="items in item.ar" :key="items.name">{{items.name}}</router-link>
                    </span>
                </div>
                <div @click="add(item.id)" class="add_play_list">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="glyph-add" aria-hidden="true"><path d="M15.169 21.24v-4.423h-4.387a.824.824 0 01-.818-.813c0-.448.379-.821.818-.821h4.387V10.76c0-.44.38-.796.827-.796.447 0 .827.356.827.796v4.423h4.395c.447 0 .818.373.818.821a.82.82 0 01-.818.813h-4.395v4.423c0 .431-.38.796-.827.796-.447 0-.827-.365-.827-.796z"></path></svg>
                </div>
            </div>
        </div>
        <div class="search_title">
            <h2>专辑</h2>
        </div>
        <div class="flex_layout">
            <div class="albums" v-for="item in hotAlbums" :key="item.names">
                <router-link :to="{name: 'Album', params: {id: item.id}}">
                    <img class="album_cover" v-lazy="item.picUrl + '?param=150y150'" :alt="item.name" :title="item.name">
                </router-link>
                <div class="info">
                    <router-link :to="{name: 'Album', params: {id: item.id}}">{{item.name}}</router-link>
                    <router-link :to="{name: 'Artist', params: {id: item.artist.id}}">{{item.artists[0].name}}</router-link>
                </div>
            </div>
        </div>
        <div class="search_title" v-show="mvs && mvs.length>0">
            <h2>热门视频排行</h2>
        </div>
        <div class="flex_layout" v-show="mvs && mvs.length>0">
            <div class="albums mv" v-for="item in mvs" :key="item.names">
                <router-link :to="{name: 'MV', params: {id: item.id}}">
                    <img class="album_cover" v-lazy="item.imgurl16v9 + '?param=159y90'" :alt="item.name" :title="item.name">
                </router-link>
                <div class="info">
                    <router-link :to="{name: 'MV', params: {id: item.id}}">{{item.name}}</router-link>
                    <router-link :to="{name: 'Artist', params: {id: item.artist.id}}">{{item.artistName}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    name: 'Artist',
    data() {
        return {
            img1v1Url: '',
            name: '',
            postArtist: [],
            hotSongs: [],
            hotAlbums: [],
            mvs: []
        }
    },
    methods: {
        ...mapActions(['play', 'add']),
        artist () {
            var that = this;
            axios.all([
                this.$api.music.artistsong(this.id), 
                this.$api.music.artistalbum(this.id), 
                this.$api.music.artistmv(this.id), 
            ])
            .then(axios.spread((res1, res2, res3)=>{
                that.img1v1Url = res1.artist.img1v1Url;
                that.name = res1.artist.name;
                that.hotSongs = res1.hotSongs;
                that.hotAlbums = res2.hotAlbums;
                that.mvs = res3.mvs;
            }))
        }
    },
    beforeRouteUpdate (to, from, next) {
        if (to.fullPath != from.fullPath) {
            next()
            this.id = this.$route.params.id
            this.artist()
        }
    },
    async activated() {
        var id = this.$route.params.id
        if (this.id != id) {
            this.id = id
            this.artist()
        }
    }
}
</script>
<style>
    .add_play_list{
        width: 32px;
        height: 100%;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
    }
    .add_play_list svg{
        width: 32px;
        height: 32px;
        fill: #fa233b;
    }
    .artist{
        padding: 0px;
    }
    .artist .helf_layout{
        grid-template-rows: repeat(3,1fr);
        gap: 0px 20px;
    }
    .artist_info{
        position: relative;
        padding-top: 80px;
        box-sizing: border-box;
        height: 386px;
        background: linear-gradient(180deg,#fff,#f3f3f3)
    }
    .artist_info img{
        width: 190px;
        border-radius: 190px;
        box-shadow: 0 10px 25px rgba(0,0,0,.1);
        display: block;
        margin: auto;
    }
    .artist_info h1{
        position: absolute;
        bottom: 0;
        padding: 0 40px 22px;
        line-height: 39px;
        width: -webkit-fill-available;
    }
    @media screen and (max-width: 980px) {
        .artist div[class $= '_layout'], div[class $= '_title']{
            padding-left: 20px;
        }
    }
</style>