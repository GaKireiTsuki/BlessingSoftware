<template>
    <div class="music">
        <input type="search" class="bmbl" v-model="query" @keyup.enter="search" name="" id="">
        <div id="new_song_helf">
            <div class="new_song_helf">
                <div class="new_song" v-for="item in postNewSong" :key="item.data">
                    <div class="play_music">
                        <img v-lazy="item.picUrl + '?param=50y50'" :alt="item.name" :title="item.name">
                        <svg @click="play(item.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"></path></svg>
                    </div>
                    <div class="info">
                        <span>{{item.name}}</span>
                        <span>{{item.song.artists[0].name}}</span>
                    </div>
                </div>
            </div>
            <div class="open">
            <span></span>
            <span></span>
        </div>
        </div>
        <div id="new_album_helf">
            <div class="new_album_helf">
                <div v-for="item in postNewAlbum" :key="item.name">
                    <img :src="item.picUrl + '?param=150y150'" :alt="item.name" :title="item.name">
                    <div class="info">
                        <span>{{item.name}}</span>
                        <span>{{item.artists[0].name}}</span>
                    </div>
                </div>
            </div>
            <div class="open">
            <span></span>
            <span></span>
        </div>
        </div>
        <audio autoplay controls  :src="postPlay"></audio>
    </div>
</template>
<script>
import $ from 'jquery'

export default {
    name: 'music',
    data() {
        return {
            query: '',
            SearchData: [],
            postNewSong: [],
            postNewAlbum: [],
            postPlay: ''
        }
    },
    methods: {
        search: function (query) {
            this.$serve.postSearch(query).then(res => {
                console.log(res)
                console.log("res")
            }).catch(err => {
                console.log(err)
            })
        },
        play: function (musicid) {
            var that = this;
            this.$serve.postPlay(musicid).then(res => {
                console.log(res.data.data[0])
                that.postPlay = res.data.data[0].url;
            }).catch(err => {
                console.log(err)
            })
            this.$serve.postInfo(musicid).then(res => {
                console.log(res.data.songs[0])
            }).catch(err => {
                console.log(err)
            })
        }
    },
    created () {
        var that = this;
        this.$serve.postNewSong().then(res => {
            that.postNewSong = res.data.result
        }).catch(err => {
            console.log(err)
        })
        this.$serve.postNewAlbum().then(res => {
            console.log(res.data.albums)
            that.postNewAlbum = res.data.albums
        }).catch(err => {
            console.log(err)
        })
    }
}
$(document).ready(function () {
    $(".music input[type=search]").click(function () {
        $("body, html").animate({ scrollTop: 0 }, 300, "linear");
    });
    $("#new_song_helf .open").click(function () { 
        if ($(".new_song_helf").hasClass("e")) {
            $(".new_song_helf").animate({ scrollTop: 0 }, 400, "linear");
            $(".new_song_helf").css({height: "199.96", "margin-bottom": "25px", "overflow-y": "hidden"}).removeClass("e");
            $("#new_song_helf .open span:nth-of-type(1)").css({transform: "rotate(45deg)"}).removeClass("e");
            $("#new_song_helf .open span:nth-of-type(2)").css({transform: "rotate(-45deg)"}).removeClass("e");
        } else {
            $(".new_song_helf").css({height: "447.92px", "margin-bottom": "0px", "overflow-y": "auto"}).addClass("e");
            $("#new_song_helf .open span:nth-of-type(1)").css({transform: "rotate(-45deg)"}).addClass("e");
            $("#new_song_helf .open span:nth-of-type(2)").css({transform: "rotate(45deg)"}).addClass("e");
        }
    });
    $("#new_album_helf .open").click(function () { 
        if ($(".new_album_helf").hasClass("e")) {
            $(".new_album_helf").animate({ scrollTop: 0 }, 400, "linear");
            $(".new_album_helf").css({height: "375.99px", "margin-bottom": "25px", "overflow-y": "hidden"}).removeClass("e");
            $("#new_album_helf .open span:nth-of-type(1)").css({transform: "rotate(45deg)"}).removeClass("e");
            $("#new_album_helf .open span:nth-of-type(2)").css({transform: "rotate(-45deg)"}).removeClass("e");
        } else {
            $(".new_album_helf").css({height: "826.98px", "margin-bottom": "0px", "overflow-y": "auto"}).addClass("e");
            $("#new_album_helf .open span:nth-of-type(1)").css({transform: "rotate(-45deg)"}).addClass("e");
            $("#new_album_helf .open span:nth-of-type(2)").css({transform: "rotate(45deg)"}).addClass("e");
        }
    });
});
</script>
<style>
    .open{
        margin: auto;
        width: 28px;
        height: 20px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .open span{
        height: 1px;
        width: 14px;
        display: inline-block;
        position: absolute;
        background: #1d1d1f;
        transition: all .4s cubic-bezier(0.55, 0.06, 0.68, 0.19);
    }
    .open span:nth-of-type(1){
        transform: rotate(45deg);
        left: 2.4px;
    }
    .open span:nth-of-type(2){
        transform: rotate(-45deg);
        right: 2.4px;
    }
    .new_album_helf{
        height: 375.99px;
        padding: 25px 0px;
        margin-bottom: 25px;
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        grid-template-rows: repeat(4,1fr);
        row-gap: 16px;
        overflow-y: hidden;
        transition: all .4s cubic-bezier(0.55, 0.06, 0.68, 0.19);
    }
    .new_album_helf div{
        width: 150px;
    }
    .play_music{
        height: 40px;
        position: relative;
    }
    .play_music svg{
        position: absolute;
        left: 0;
        width: 40px;
        opacity: 0;
        transform: scale(0.7);
        fill: #fff;
        transition: all .2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
    .new_song:hover .play_music svg{
        opacity: 1;
        transform: scale(1);
    }
    .new_song:hover .play_music img{
        filter: saturate(180%) blur(1px);
        box-sizing: border-box;
    }
    .new_song:hover{
        background: rgba(0,0,0,.14901960784313725);
    }
    .music input[type=search]{
        z-index: 2;
        position: sticky;
        top: 50px;
        margin-bottom: 12px;
        background: hsl(0deg 0% 100% / 72%);
        border: 1px solid rgba(0,0,0,0.16);
        color: #1d1d1f;
    }
    .new_song{
        display: flex;
        padding: 7.5px 24px 7.5px 0;
        border-top: 1px solid rgba(0,0,0,.14901960784313725);
    }
    .info span{
        font-size: 14px;
        line-height: 1.429em;
        font-family: "SF Pro Text","PingFang SC",Arial,sans-serif;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        white-space: normal;
        overflow: hidden;
    }
    .info span:nth-of-type(2){
        font-size: 12px;
        color: rgba(60,60,67,.6);
    }
    .new_song img{
        width: 40px;
        height: 40px;
        margin-right: 6px;
        border-radius: 6px;
    }
    .new_song_helf{
        transition: all .4s cubic-bezier(0.55, 0.06, 0.68, 0.19);
        height: 199.96px;
        overflow-y: hidden;
        padding: 25px 0px;
        margin-bottom: 25px;
        display: grid;
        column-gap: 24px;
        grid-template-rows: repeat(4,1fr);
        grid-template-columns: repeat(4,1fr);
    }
    @media screen and (max-width: 484px) {
        .new_song_helf{
            grid-template-columns: repeat(2,1fr);
        }
        .music {
            padding: 0px 24px;
        }
        .new_album_helf::-webkit-scrollbar, .new_song_helf::-webkit-scrollbar{
            display: none;
        }
        .new_album_helf{
            grid-template-rows: repeat(12,1fr);
        }
    }
</style>