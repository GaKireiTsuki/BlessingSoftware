<template>
    <div class="music">
        <input type="search" class="bmbl" v-model="keywords" @keyup.enter="search" name="" id="">
        <div id="new_song_helf">
            <div class="new_song_helf helf_layout">
                <div class="new_song" v-for="item in postNewSong" :key="item.name">
                    <div class="play_music">
                        <img v-lazy="item.picUrl + '?param=50y50'" :alt="item.name" :title="item.name">
                        <svg @click="play(item.id)" class="play_button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><path d="M11.3545232,18.4180929 L18.4676039,14.242665 C19.0452323,13.9290954 19.0122249,13.1204156 18.4676039,12.806846 L11.3545232,8.63141809 C10.7603912,8.26833741 9.98471883,8.54889976 9.98471883,9.19254279 L9.98471883,17.8404645 C9.98471883,18.5006112 10.7108802,18.7976773 11.3545232,18.4180929 Z"></path></svg>
                    </div>
                    <div class="info">
                        <router-link to="">{{item.name}}</router-link>
                        <router-link :to="{name: 'Artist', params: {id: item.song.artists[0].id}}">{{item.song.artists[0].name}}</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div id="new_album_helf">
            <div class="new_album_helf flex_layout">
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
        </div>
    </div>
</template>
<script>
import player from '../axios/player'
export default player
</script>
<style>
    .new_album_helf{
        padding: 25px 0px;
        margin-bottom: 25px;
        grid-template-rows: repeat(2,1fr) !important;
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
    .new_song_helf{
        padding: 25px 0px;
        margin-bottom: 25px;
        grid-template-rows: repeat(4,1fr) !important;
        gap: 0px 20px !important;
    }
</style>