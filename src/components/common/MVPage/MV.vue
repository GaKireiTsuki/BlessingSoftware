<template>
    <div v-wechat-title="'BS Music MV - ' + mv.name">
        <div class="player">
            <svg class="close_player" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="#fff">
                <path d="M10.5 21C4.724 21 0 16.275 0 10.5S4.724 0 10.5 0 21 4.725 21 10.5 16.276 21 10.5 21zm-3.543-5.967a.96.96 0 00.693-.295l2.837-2.842 2.85 2.842c.167.167.41.295.693.295.552 0 1.001-.461 1.001-1.012 0-.281-.115-.512-.295-.704L11.899 10.5l2.85-2.855a.875.875 0 00.295-.68c0-.55-.45-.998-1.001-.998a.871.871 0 00-.668.295l-2.888 2.855-2.862-2.843a.891.891 0 00-.668-.281.99.99 0 00-1.001.986c0 .269.116.512.295.678L9.088 10.5l-2.837 2.843a.926.926 0 00-.295.678c0 .551.45 1.012 1.001 1.012z" fill-rule="nonzero"/>
            </svg>
            <div style="height: 100%; width: 100%; display: flex; align-items: center; justify-content: center;">
                <video :src="url" controls></video>
            </div>
            <select v-model="r" name="" id="">
                <option selected value="">Default</option>
                <option v-for="(item, index) in sortBrs" :key="index" :value="item.br">{{item.br}}P</option>
            </select>
        </div>
        <div class="mv_info">
            <div class="play_mv play_cover">
                <button @click="playermv()" class="open_play play_button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" class="glyph"><path d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"></path></svg>
                </button>
                <img v-lazy="mv.cover + '?param=700y400'" :key="mv.cover + '?param=700y400'" alt="">
            </div>
            <div class="artist_mv_info">
                <p v-if="mv.name">{{mv.name | Nbsp}}</p>
                <p>
                    <router-link :to="{name: 'Artist', params: {id: item.id, name: item.name}}" v-for="(item, index) in mv.artists" :key="index">{{item.name}}</router-link>
                </p>
                <p>{{mv.publishTime | Date}}</p>
            </div>
        </div>
        <div class="search_title">
            <h2>更多{{mv.artistName}}的作品</h2>
        </div>
        <div class="flex_layout">
            <div class="albums mv" v-for="(item, index) in mvs" :key="index">
                <router-link :to="{name: 'MV', params: {id: item.id, name: item.name}}">
                    <img class="album_cover" v-lazy="item.imgurl16v9 + '?param=159y90'" :key="item.imgurl16v9 + '?param=159y90'" :alt="item.name" :title="item.name">
                </router-link>
                <div class="info">
                    <router-link :to="{name: 'MV', params: {id: item.id, name: item.name}}">{{item.name}}</router-link>
                    <router-link :to="{name: 'Artist', params: {id: item.artist.id, name: item.artist.name}}">{{item.artistName}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import axios from 'axios'
export default {
    name: 'MV',
    data() {
        return {
            mv: '',
            mvs: [],
            brs: [],
            url: '',
            r: '',
        }
    },
    computed: {
        sortBrs () {
            return sortBrsKey(this.brs, 'point')
            function sortBrsKey(array, key) {
                return array.sort(function (a, b) {
                    var x = a[key]
                    var y = b[key]
                    return ((x > y ) ? -1 : (x < y) ? 1 : 0)
                })
            }
        }
    },
    methods: {
        getmv () {
            axios.all([this.$api.music.mvinfo(this.id)])
            .then(axios.spread((res)=>{
                this.mv = res.data
                this.artistId = res.data.artistId;
                this.brs = res.data.brs;
                this.$api.music.artistmv(this.artistId).then(res => {
                    this.mvs = res.mvs;
                })
            }))
        },
        playermv () {
            axios.all([this.$api.music.playmv(this.id, this.r)])
            .then(axios.spread((res)=>{
                this.url = res.data.url;
            }))
        }
    },
    watch: {
        r() {
            this.playermv()
                setTimeout(() => {
                $('video').trigger('play');
            }, 300);
        }
    },
    beforeRouteUpdate (to, from, next) {
        if (to.fullPath != from.fullPath) {
            next()
            this.id = this.$route.params.id
            this.getmv()
        }
    },
    async activated() {
        var id = this.$route.params.id
        if (this.id != id) {
            this.id = id
            this.getmv()
        }
    }
}
$(function () {
    var openplay = $(".open_play");
    var closeplay = $(".close_player");
    var player = $(".player");
    openplay.on("click", function () { 
        player.show()
        setTimeout(() => {
            $('video').trigger('play');
        }, 300);
        $('audio').trigger('pause');
    });
    closeplay.on("click", function () { 
        player.hide()
        $('video').trigger('pause');
    });
});
</script>
<style>
    select{
        border: none;
        background: #ffffff00;
        color: white;
        outline: none;
        position: fixed;
        right: 44px;
    }
    select option{
        background: #000 !important;
        border: none;
    }
    .close_player{
        top: 13.5px;
        left: 13.5px;
        position: fixed;
        opacity: 0;
        transition: all 0.3s ease-in;
    }
    .player:hover .close_player{
        opacity: 1;
    }
    .player{
        position: fixed;
        background: #000;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        top: 0;
        left: 0;
        padding: 44px;
        box-sizing: border-box;
        display: none;
    }
    .player video{
        width: 100%;
        height: 100%;
        outline: none;
    }
    .mv_info{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
        padding: 40px 0 30px 0;
    }
    .play_mv img{
        width: 100%;
        border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,.1), 0 10px 13px 0 rgba(0,0,0,.11);
    }
    .artist_mv_info{
        display: grid;
        align-content: center;
    }
    .artist_mv_info p:nth-of-type(1){
        font-size: 24px;
        color: #000000f2;
        white-space: pre-wrap;
    }
    .artist_mv_info p a{
        margin-top: 2px;
        font-size: 24px;
        color: #fa233b;
        margin-right: 8px;
    }
    .artist_mv_info p a:hover{
        text-decoration: underline;
    }
    .artist_mv_info p:nth-of-type(3){
        margin-top: 4px;
        font-size: 12px;
        color: #34344399;
    }
</style>