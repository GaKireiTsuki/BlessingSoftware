<template>
    <div>
        <div class="player">
            <svg class="close_player" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="#fff">
                <path d="M10.5 21C4.724 21 0 16.275 0 10.5S4.724 0 10.5 0 21 4.725 21 10.5 16.276 21 10.5 21zm-3.543-5.967a.96.96 0 00.693-.295l2.837-2.842 2.85 2.842c.167.167.41.295.693.295.552 0 1.001-.461 1.001-1.012 0-.281-.115-.512-.295-.704L11.899 10.5l2.85-2.855a.875.875 0 00.295-.68c0-.55-.45-.998-1.001-.998a.871.871 0 00-.668.295l-2.888 2.855-2.862-2.843a.891.891 0 00-.668-.281.99.99 0 00-1.001.986c0 .269.116.512.295.678L9.088 10.5l-2.837 2.843a.926.926 0 00-.295.678c0 .551.45 1.012 1.001 1.012z" fill-rule="nonzero"/>
            </svg>
            <div style="height: 100%; width: 100%; display: grid; place-items: center;">
                <video :src="url" controls></video>
            </div>
        </div>
        <div class="mv_info">
            <div class="play_mv">
                <button class="open_play bmbl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" class="glyph"><path d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"></path></svg>
                </button>
                <img v-lazy="cover + '?param=700y400'" alt="">
            </div>
            <div class="artist_mv_info">
                <p>{{name}}</p>
                <router-link :to="{name: 'Artist', params: {id: item.id}}" v-for="item in artists" :key="item.names">{{item.name}}</router-link>
                <p>{{publishTime}}</p>
            </div>
        </div>
        <div class="search_title">
            <h2>更多{{artistName}}的作品</h2>
        </div>
        <div class="flex_layout">
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
import $ from 'jquery'
export default {
    name: 'MV',
    data() {
        return {
            url: '',
            cover: '',
            artists: [],
            name: '',
            publishTime: '',
            artistId: '',
            mvs: [],
            artistName: '',
        }
    },
    methods: {
        playmv() {
            var that = this;
            this.$serve.postPlayMV(this.$route.params.id).then(res => {
                that.url = res.data.url;
            })
            this.$serve.postInfoMV(this.$route.params.id).then(res => {
                that.cover = res.data.cover;
                that.artists = res.data.artists;
                that.name = res.data.name;
                that.publishTime = res.data.publishTime;
                that.artistId = res.data.artistId;
                that.artistName = res.data.artistName;
                this.$serve.postArtistMV(this.artistId).then(res => {
                    that.mvs = res.mvs;
                })
            })
        }
    },
    watch: {
        $route(to, from) {
            this.playmv()
        }
    },
    activated() {
        var that = this;
        this.$serve.postPlayMV(this.$route.params.id).then(res => {
            that.url = res.data.url;
        })
        this.$serve.postInfoMV(this.$route.params.id).then(res => {
            that.cover = res.data.cover;
            that.artists = res.data.artists;
            that.name = res.data.name;
            that.publishTime = res.data.publishTime;
            that.artistId = res.data.artistId;
            that.artistName = res.data.artistName;
            this.$serve.postArtistMV(this.artistId).then(res => {
                that.mvs = res.mvs;
            })
        })
    }
}
$(document).ready(function () {
    var openplay = $(".open_play");
    var closeplay = $(".close_player");
    var player = $(".player");
    $(openplay).click(function () { 
        player.show()
        $('video').trigger('play');
        $('audio').trigger('pause');
    });
    $(closeplay).click(function () { 
        player.hide()
        $('video').trigger('pause');
        $('audio').trigger('play');
    });
});
</script>
<style>
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
    .play_mv{
        position: relative;
        display: grid;
        place-items: center;
    }
    .open_play{
        width: 36px;
        height: 36px;
        border: none;
        position: absolute;
        border-radius: 23px;
        background: hsl(0deg 0% 100% / 0%);
        backdrop-filter: blur(5px);
        z-index: 1;
        transition: all 0.1s ease-in;
        opacity: 0;
        outline: none;
    }
    .open_play svg{
        fill: #fff;
    }
    .play_mv img{
        width: 100%;
        border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,.1), 0 10px 13px 0 rgba(0,0,0,.11);
        transition: all 0.1s ease-in;
    }
    .play_mv:hover img{
        filter: brightness(80%);
    }
    .play_mv:hover .open_play{
        opacity: 1;
    }
    .open_play:hover{
        cursor: pointer;
        background: #fa233b;
    }
    .artist_mv_info{
        display: grid;
        align-content: center;
    }
    .artist_mv_info p:nth-of-type(1){
        font-size: 24px;
        color: #000000f2;
    }
    .artist_mv_info a{
        margin-top: 2px;
        font-size: 24px;
        color: #fa233b;
    }
    .artist_mv_info a:hover{
        text-decoration: underline;
    }
    .artist_mv_info p:nth-of-type(2){
        margin-top: 4px;
        font-size: 12px;
        color: #34344399;
    }
</style>