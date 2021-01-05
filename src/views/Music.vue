<template>
    <div class="music">
        <input type="search" class="bmbl" v-model="keywords" @keyup.enter="search" name="" id="">
        <div id="new_song_helf">
            <div class="new_song_helf">
                <div class="new_song" v-for="item in postNewSong" :key="item.name">
                    <div class="play_music">
                        <img v-lazy="item.picUrl + '?param=50y50'" :alt="item.name" :title="item.name">
                        <svg @click="play(item.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"></path></svg>
                    </div>
                    <div class="info">
                        <router-link to="">{{item.name}}</router-link>
                        <router-link :to="{name: 'Artist', params: {id: item.song.artists[0].id}}">{{item.song.artists[0].name}}</router-link>
                    </div>
                </div>
            </div>
            <div class="open">
            <span></span>
            <span></span>
        </div>
        </div>
        <div id="new_album_helf">
            <div class="new_album_helf albums_grid">
                <div class="albums" v-for="item in postNewAlbum" :key="item.name">
                    <router-link :to="{name: 'Album', params: {id: item.id}}">
                        <img class="album_cover" v-lazy="item.picUrl + '?param=150y150'" :alt="item.name" :title="item.name">
                    </router-link>
                    <div class="info">
                        <router-link :to="{name: 'Album', params: {id: item.id}}">{{item.name}}</router-link>
                        <router-link :to="{name: 'Artist', params: {id: item.artist.id}}">{{item.artists[0].name}}</router-link>
                    </div>
                </div>
            </div>
            <div class="open">
            <span></span>
            <span></span>
        </div>
        </div>
    </div>
</template>
<script>
import player from '../axios/player'
export default player
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
        height: 412.66px;
        padding: 25px 0px;
        margin-bottom: 25px;
        overflow-y: hidden;
        transition: all .4s cubic-bezier(0.55, 0.06, 0.68, 0.19);
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
    .new_song img{
        width: 40px;
        height: 40px;
        margin-right: 6px;
        border-radius: 6px;
    }
    .new_song .info a:nth-of-type(1){
        text-decoration: none;
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